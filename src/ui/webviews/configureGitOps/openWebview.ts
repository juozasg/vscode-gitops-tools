import { Uri, window, workspace } from 'vscode';

import { GitInfo, getFolderGitInfo } from 'cli/git/gitInfo';
import { kubernetesTools } from 'cli/kubernetes/kubernetesTools';
import { extensionContext, telemetry } from 'extension';
import { failed } from 'types/errorable';
import { FluxSourceObject, namespacedObject } from 'types/flux/object';
import { ClusterProvider, KubernetesObject } from 'types/kubernetes/kubernetesTypes';
import { TelemetryEventNames } from 'types/telemetryEventNames';
import { getCurrentClusterInfo } from 'ui/treeviews/treeViews';
import { WebviewBackend } from '../WebviewBackend';

import { ConfigureGitOpsWebviewParams } from 'types/webviewParams';
import { receiveMessage } from './receiveMessage';

let webview: WebviewBackend | undefined;

/**
 * Open the webview editor with a form to enter all the flags
 * needed to create a source (and possibly Kustomization)
 */
export async function openConfigureGitOpsWebview(selectSource: boolean, selectedSource?: FluxSourceObject | string, set?: any, gitInfo?: GitInfo) {
	telemetry.send(TelemetryEventNames.CreateSourceOpenWebview);

	const clusterInfo = await getCurrentClusterInfo();
	if (failed(clusterInfo)) {
		return;
	}
	if (clusterInfo.result.clusterProvider === ClusterProvider.Unknown) {
		window.showErrorMessage('Cluster provider is not detected ');
		return;
	}
	if (clusterInfo.result.clusterProvider === ClusterProvider.DetectionFailed) {
		window.showErrorMessage('Cluster provider detection failed.');
		return;
	}

	if (!gitInfo && workspace.workspaceFolders && workspace.workspaceFolders.length > 0) {
		// use the first open folder
		gitInfo = await getFolderGitInfo(workspace.workspaceFolders[0].uri.fsPath);
	}

	const [nsResults, gitResults, ociResults, bucketResults] = await Promise.all([kubernetesTools.getNamespaces(),
		kubernetesTools.getGitRepositories(),
		kubernetesTools.getOciRepositories(),
		kubernetesTools.getBuckets(),
	]);

	const namespaces = nsResults?.items.map(i => i.metadata.name) as string[];

	const sources: KubernetesObject[] = [...gitResults?.items || [],
									 ...ociResults?.items || [],
									 ...bucketResults?.items || []];

	const selectedSourceName = typeof selectedSource === 'string' ? selectedSource : (namespacedObject(selectedSource) || '');

	const webviewParams: ConfigureGitOpsWebviewParams = {
		clusterInfo: clusterInfo.result,
		gitInfo,
		namespaces: namespaces,
		sources: sources,
		selectSourceTab: selectSource,
		selectedSource: selectedSourceName,
		set,
	};


	if(!webview || webview.disposed) {
		const extensionUri = extensionContext.extensionUri;
		const uri = Uri.joinPath(extensionUri, 'webview-ui', 'configureGitOps');
		webview = new WebviewBackend('Configure GitOps', uri, webviewParams, receiveMessage);
	} else {
		webview.update(webviewParams);
	}
}
