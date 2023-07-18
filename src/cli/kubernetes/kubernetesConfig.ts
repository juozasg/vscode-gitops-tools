import deepEqual from 'lite-deep-equal';
import safesh from 'shell-escape-tag';
import { EventEmitter, window } from 'vscode';

import * as k8s from '@kubernetes/client-node';
import { ActionOnInvalid } from '@kubernetes/client-node/dist/config_types';
import { shellCodeError } from 'cli/shell/exec';
import { setVSCodeContext, telemetry } from 'extension';
import { ContextId } from 'types/extensionIds';
import { TelemetryError } from 'types/telemetryEventNames';
import { loadAvailableResourceKinds } from './kubectlGet';
import { loadKubeConfigPath } from './kubernetesConfigWatcher';
import { invokeKubectlCommand } from './kubernetesToolsKubectl';

export const onKubeConfigContextsChanged = new EventEmitter<k8s.KubeConfig>();
export const onCurrentContextChanged = new EventEmitter<k8s.KubeConfig>();

onKubeConfigContextsChanged.event(kc => {
	setVSCodeContext(ContextId.NoClusterSelected, false);
	setVSCodeContext(ContextId.CurrentClusterGitOpsNotEnabled, false);
	setVSCodeContext(ContextId.NoSources, false);
	setVSCodeContext(ContextId.NoWorkloads, false);
	setVSCodeContext(ContextId.FailedToLoadClusterContexts, false);
	loadAvailableResourceKinds();
});

export const kubeConfig: k8s.KubeConfig  = new k8s.KubeConfig();

type KubeConfigChanges = {
	currentContextChanged: boolean;
	contextsChanged: boolean;
	kubeConfigTextChanged: boolean;
};

function compareKubeConfigs(kc1: k8s.KubeConfig, kc2: k8s.KubeConfig): KubeConfigChanges {
	// exportConfig() will omit tokens and certs
	const textChanged = kc1.exportConfig() !== kc2.exportConfig();

	const context1 = kc1.getContextObject(kc1.getCurrentContext());
	const context2 = kc2.getContextObject(kc2.getCurrentContext());

	const cluster1 = kc1.getCurrentCluster();
	const cluster2 = kc2.getCurrentCluster();

	const user1 = kc1.getCurrentUser();
	const user2 = kc2.getCurrentUser();

	const currentContextChanged = !deepEqual(context1, context2) || !deepEqual(cluster1, cluster2) || !deepEqual(user1, user2);

	const contexts1 = kc1.getContexts();
	const contexts2 = kc2.getContexts();

	const contextsChanged = !deepEqual(contexts1, contexts2);

	return {
		currentContextChanged,
		// if current context user or server changed, we need to reload the contexts list
		contextsChanged: contextsChanged || currentContextChanged,
		kubeConfigTextChanged: textChanged,
	};
}

// reload the kubeconfig via kubernetes-tools. fire events if things have changed
export async function loadKubeConfig(forceReloadResourceKinds = false) {
	console.log('loadKubeConfig');

	const configShellResult = await invokeKubectlCommand('config view');

	if (configShellResult?.code !== 0) {
		telemetry.sendError(TelemetryError.FAILED_TO_GET_KUBECTL_CONFIG);
		const path = await loadKubeConfigPath();
		window.showErrorMessage(`Failed to load kubeconfig: ${path} ${shellCodeError(configShellResult)}`);
		return;
	}

	const newKubeConfig = new k8s.KubeConfig();
	newKubeConfig.loadFromString(configShellResult.stdout, {onInvalidEntry: ActionOnInvalid.FILTER});

	const kcChanges = compareKubeConfigs(kubeConfig, newKubeConfig);
	if (kcChanges.kubeConfigTextChanged) {
		kubeConfig.loadFromString(configShellResult.stdout);

		if(kcChanges.contextsChanged) {
			onKubeConfigContextsChanged.fire(kubeConfig);
		}

		if(kcChanges.currentContextChanged) {
			console.log('currentContext changed', kubeConfig.getCurrentContext());
			onCurrentContextChanged.fire(kubeConfig);
		} else if(forceReloadResourceKinds) {
			await loadAvailableResourceKinds();
		}

	}
}

/**
 * Sets current kubectl context.
 * @param contextName Kubectl context name to use.
 * @returns `undefined` in case of an error or Object with information about
 * whether or not context was switched or didn't need it (current).
 */
export async function setCurrentContext(contextName: string): Promise<undefined | { isChanged: boolean;	}> {
	if (kubeConfig.getCurrentContext() === contextName) {
		return {
			isChanged: false,
		};
	}

	const setContextShellResult = await invokeKubectlCommand(safesh`config use-context ${contextName}`);
	if (setContextShellResult?.stderr) {
		telemetry.sendError(TelemetryError.FAILED_TO_SET_CURRENT_KUBERNETES_CONTEXT);
		window.showErrorMessage(`Failed to set kubectl context to ${contextName}: ${setContextShellResult?.stderr}`);
		return;
	}

	return {
		isChanged: true,
	};
}
