import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { params, ParamsDictionary } from './params';

/* SOURCE */

export const [createSource, setCreateSource] = createSignal(true);
export const [selectedSource, setSelectedSource] = createSignal('');

export const [getSource, setSource] = createStore({
	kind: 'GitRepository',

	name: 'podinfo',
	namespace: 'flux-system',

	interval: '1m0s',
	timeout: '5m0s',
});

export const [getGitRepository, setGitRepository] = createStore({
	url: 'https://github.com/stefanprodan/podinfo',
	refType: 'branch',
	ref: 'master',

	// azure
	createFluxConfig: true,
	azureScope: 'cluster',

	// sync
	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type

	// used the secretRef is not provided
	privateKeyFile: '', // for git
	caFile: '',
	username: '',
	password: '',

	recurseSubmodules: false,
	ignorePaths: '',
});

export const [getHelmRepository, setHelmRepository] = createStore({
	url: 'https://stefanprodan.github.io/podinfo',

	// sync
	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type

	username: '',
	password: '',

	caFile: '',
	keyFile: '', // for TLS
	certFile: '',

	passCredentials: false,
});

export const [getOCIRepository, setOCIRepository] = createStore({
	url: 'oci://ghcr.io/stefanprodan/manifests/podinfo',
	ref: 'latest',
	refType: 'tag',
	provider: 'generic',
	ignorePaths: '',
	insecure: false, // non TLS HTTP for Bucket or OCI
	// sync
	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type
	serviceAccount: '',
});

export const [getBucket, setBucket] = createStore({
	// bucketEndpoint: 'minio.minio.svc.cluster.local:9000',
	endpoint: '',
	buckerName: 'podinfo',
	region: '',
	provider: 'generic',
	accessKey: '',
	secretKey: '',
	// sync
	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type
	insecure: false, // non TLS HTTP for Bucket or OCI
});



/* KUSTOMIZATION */

export const [createWorkload, setCreateWorkload] = createSignal(false);

export const [getKustomization, setKustomization] = createStore({
	name: 'podinfo',
	namespace: 'flux-system',
	source: '',  // Ex: GitRepo/podinfo.flux-system
	path: '/kustomize',
	targetNamespace: 'default',
	serviceAccount: '',
	dependsOn: '',
	prune: true,
});

export const [getHelmRelease, setHelmRelease] = createStore({

	// 	--chart string                   Helm chart name or path
	// 	--chart-interval duration        the interval of which to check for new chart versions
	// 	--chart-version string           Helm chart version, accepts a semver range (ignored for charts from GitRepository sources)
	// 	--crds crds                      upgrade CRDs policy, available options are: (Skip, Create, CreateReplace)
	// 	--create-target-namespace        create the target namespace if it does not exist
	// 	--depends-on strings             HelmReleases that must be ready before this release can be installed, supported formats '<name>' and '<namespace>/<name>'
	// -h, --help                           help for helmrelease
	// 	--kubeconfig-secret-ref string   the name of the Kubernetes Secret that contains a key with the kubeconfig file for connecting to a remote cluster
	// 	--reconcile-strategy string      the reconcile strategy for helm chart created by the helm release(accepted values: Revision and ChartRevision) (default "ChartVersion")
	// 	--release-name string            name used for the Helm release, defaults to a composition of '[<target-namespace>-]<HelmRelease-name>'
	// 	--service-account string         the name of the service account to impersonate when reconciling this HelmRelease
	// 	--source helmChartSource         source that contains the chart in the format '<kind>/<name>.<namespace>', where kind must be one of: (HelmRepository, GitRepository, Bucket)
	// 	--target-namespace string        namespace to install this release, defaults to the HelmRelease namespace
	// 	--values strings                 local path to values.yaml files, also accepts comma-separated values
	// 	--values-from strings            a Kubernetes object reference that contains the values.yaml data key in the format '<kind>/<name>', where kind must be one of: (Secret,ConfigMap)


});
// export function getStore(storeName: string, variable: string) {
// 	const store = (storeName === 'source') ? source : kustomization;
// 	return () => store[variable];
// }

// export function setStore(storeName: string, variable: any) {
// 	const setter = (storeName === 'source') ? setSource : setKustomization;
// 	return (val: any) => setter(variable, val);
// }

interface StoreMap {
	[key: string]: any;
}

const getters: StoreMap = {
	getSource,
	getGitRepository,
	getOCIRepository,
	getHelmRepository,
	getKustomization,
	getHelmRelease,
};

const setters: StoreMap = {
	setSource,
	setGitRepository,
	setOCIRepository,
	setHelmRepository,
	setKustomization,
	setHelmRelease,
};

export function storeAccessors(props: any) {
	let get: ()=> any;
	let set: (v: any)=> any;

	get = props.get || (() => undefined);
	set = props.set || ((_: any) => undefined);

	if(props.store && props.field) {
		const store = props.store;
		const field = props.field;

		const getter = getters[`get${store}`];
		const setter = getters[`set${store}`];

		get = () => getter[field];
		set = val => setter(field, val);
	}

	return {get, set};
}



// window['g'] = getA;
// window['source'] = source;


// init model when params are updated
function safeSetSource(name: any, val: any) {
	if(val) {
		setSource(name, val);
	}
}
createEffect(() => {
	safeSetSource('name', params.gitInfo?.name);
	safeSetSource('gitUrl', params.gitInfo?.url);
	safeSetSource('gitRef', params.gitInfo?.branch);

	if(params.selectedSource && params.selectedSource !== '') {
		setSelectedSource(params.selectedSource);
	}
});

