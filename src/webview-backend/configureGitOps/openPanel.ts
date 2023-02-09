import { window, workspace } from 'vscode';
import { failed } from '../../errorable';
import { telemetry } from '../../extension';
import { getExtensionContext } from '../../extensionContext';
import { getOpenedFolderGitInfo, GitInfo } from '../../git/getOpenedFolderGitInfo';
import { kubernetesTools } from '../../kubernetes/kubernetesTools';
import { FluxSourceObject, namespacedObject } from '../../kubernetes/types/flux/object';
import { ClusterProvider, KubernetesObject } from '../../kubernetes/types/kubernetesTypes';
import { TelemetryEventNames } from '../../telemetry';
import { getCurrentClusterInfo } from '../../views/treeViews';
import { createOrShowConfigureGitOpsPanel } from './Panel';

/**
 * Open the webview editor with a form to enter all the flags
 * needed to create a source (and possibly Kustomization)
 */
export async function openConfigureGitOpsPanel(selectSource: boolean, selectedSource?: FluxSourceObject) {
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

	let gitInfo: GitInfo | undefined;
	if (workspace.workspaceFolders && workspace.workspaceFolders.length > 0) {
		// use the first open folder
		gitInfo = await getOpenedFolderGitInfo(workspace.workspaceFolders[0].uri);
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

	const webviewParams = {
		clusterInfo: clusterInfo.result,
		gitInfo,
		namespaces: namespaces,
		sources: sources,
		selectSourceTab: selectSource,
		selectedSource: namespacedObject(selectedSource) || '',
	};

	createOrShowConfigureGitOpsPanel(getExtensionContext().extensionUri, webviewParams);
}
