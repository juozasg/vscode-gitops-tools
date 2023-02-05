import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { params } from './params';
import { capitalize } from './utils/helpers';

/* SOURCE */
export const [createSource, setCreateSource] = createSignal(true);
export const [selectedSource, setSelectedSource] = createSignal('');

export const [source, setSource] = createStore({
	kind: 'GitRepository',

	name: 'podinfo',
	namespace: 'flux-system',

	interval: '1m0s',
	timeout: '5m0s',

	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type
});

export const [gitRepository, setGitRepository] = createStore({
	url: 'https://github.com/stefanprodan/podinfo',
	refType: 'branch',
	ref: 'master',

	// azure
	createFluxConfig: true,
	azureScope: 'cluster',

	// used the secretRef is not provided
	privateKeyFile: '', // for git
	caFile: '',
	username: '',
	password: '',

	recurseSubmodules: false,
	ignorePaths: '',
});

export const [helmRepository, setHelmRepository] = createStore({
	url: 'https://stefanprodan.github.io/podinfo',

	username: '',
	password: '',

	caFile: '',
	keyFile: '', // for TLS
	certFile: '',

	passCredentials: false,
});

export const [ociRepository, setOciRepository] = createStore({
	url: 'oci://ghcr.io/stefanprodan/manifests/podinfo',
	ref: 'latest',
	refType: 'tag',
	provider: 'generic',
	ignorePaths: '',
	insecure: false, // non TLS HTTP for Bucket or OCI

	serviceAccount: '',
});

export const [bucket, setBucket] = createStore({
	// bucketEndpoint: 'minio.minio.svc.cluster.local:9000',
	endpoint: '',
	bucketName: 'podinfo',
	region: '',
	provider: 'generic',
	accessKey: '',
	secretKey: '',
	// sync

	insecure: false, // non TLS HTTP for Bucket or OCI
});


/* KUSTOMIZATION */

export const [createWorkload, setCreateWorkload] = createSignal(false);

export const [kustomization, setKustomization] = createStore({
	name: 'podinfo',
	namespace: 'flux-system',
	source: '',  // Ex: GitRepo/podinfo.flux-system
	path: '/kustomize',
	targetNamespace: 'default',
	serviceAccount: '',
	dependsOn: '',
	prune: true,
});


/*
export const [helmRelease, setHelmRelease] = createStore({

	name: 'podinfo',
	chart: 'podinfo',
	chartInterval: '1m0s',
	chartVersion: '>4.0.0', // (ignored for charts from GitRepository sources)
	crds:  'Create', // Skip, Create, CreateReplace
	createTargetNamespace: true,
	dependsOn: '', // supported formats '<name>' and '<namespace>/<name>'
	kubeconfigSecretRef: '', // the name of the Kubernetes Secret that contains a key with the kubeconfig file for connecting to a remote cluster
	reconcileStrategy: 'ChartVersion', // reconcile strategy for helm chart created by the helm release(accepted values: Revision and ChartRevision)
	releaseName: '', // defaults to a composition of '[<target-namespace>-]<HelmRelease-name>'

	// 	--reconcile-strategy string      the reconcile strategy for helm chart created by the helm release(accepted values: Revision and ChartRevision) (default "ChartVersion")
	// 	--release-name string            name used for the Helm release, defaults to a composition of '[<target-namespace>-]<HelmRelease-name>'
	// 	--service-account string         the name of the service account to impersonate when reconciling this HelmRelease
	// 	--source helmChartSource         source that contains the chart in the format '<kind>/<name>.<namespace>', where kind must be one of: (HelmRepository, GitRepository, Bucket)
	// 	--target-namespace string        namespace to install this release, defaults to the HelmRelease namespace
	// 	--values strings                 local path to values.yaml files, also accepts comma-separated values
	// 	--values-from strings            a Kubernetes object reference that contains the values.yaml data key in the format '<kind>/<name>', where kind must be one of: (Secret,ConfigMap)

});
*/

interface StoreMap {
	[key: string]: any;
}

const getters: StoreMap = {
	source,
	gitRepository,
	ociRepository,
	helmRepository,
	bucket,
	kustomization,
	// getHelmRelease,
};

const setters: StoreMap = {
	setSource,
	setGitRepository,
	setOciRepository,
	setHelmRepository,
	setBucket,
	setKustomization,
};

export function storeAccessors(props: any) {
	let get: ()=> any;
	let set: (v: any)=> any;

	get = props.get || (() => undefined);
	set = props.set || ((_: any) => undefined);

	if(props.store && props.field) {
		const store = props.store;
		const field = props.field;

		const getter = getters[`${store}`];
		const setter = setters[`set${capitalize(store)}`];

		get = () => getter[field];
		set = val => setter(field, val);
	}

	return {get, set};
}


createEffect(() => {
	if(params.gitInfo?.name) {
		setSource('name', params.gitInfo.name);
	}

	if(params.gitInfo?.branch) {
		setGitRepository('url', params.gitInfo.url);
	}

	if(params.gitInfo?.name) {
		setGitRepository('refType',  'branch');
		setGitRepository('ref', params.gitInfo.branch);
	}

	if(params.selectedSource && params.selectedSource !== '') {
		setSelectedSource(params.selectedSource);
	}
});

