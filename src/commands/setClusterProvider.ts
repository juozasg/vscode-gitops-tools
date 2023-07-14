import { window } from 'vscode';

import { ClusterMetadata } from 'data/globalState';
import { globalState } from 'extension';
import { KnownClusterProviders, knownClusterProviders } from 'types/kubernetes/clusterProvider';
import { ClusterNode } from 'ui/treeviews/nodes/cluster/clusterNode';
import { refreshAllTreeViews } from 'ui/treeviews/treeViews';
import { kubeConfig, onCurrentContextChanged } from 'cli/kubernetes/kubernetesConfig';

export async function setClusterProvider(clusterNode: ClusterNode) {

	const automatically = 'Automatically (Let the extension infer)';
	const quickPickItems: string[] = [...knownClusterProviders, automatically];

	const pickedProvider = await window.showQuickPick(quickPickItems, {
		title: `Choose cluster provider for "${clusterNode.context.cluster}" cluster.`,
	});
	if (!pickedProvider) {
		return;
	}


	const clusterOrContextName = clusterNode.cluster?.name || clusterNode.context.name;
	const clusterMetadata: ClusterMetadata = globalState.getClusterMetadata(clusterOrContextName) || {};
	const oldClusterProvider = clusterMetadata.clusterProvider;

	if (pickedProvider === automatically) {
		clusterMetadata.clusterProvider = undefined;
	} else {
		clusterMetadata.clusterProvider = pickedProvider as KnownClusterProviders;
	}

	globalState.setClusterMetadata(clusterOrContextName, clusterMetadata);

	if (clusterMetadata.clusterProvider !== oldClusterProvider) {
		if(clusterNode.context.name === kubeConfig.getCurrentContext()) {
			onCurrentContextChanged.fire(kubeConfig);
		}

		onCurrentContextChanged.fire(kubeConfig);
	}
}
