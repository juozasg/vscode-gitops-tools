import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { params, ParamsDictionary } from './params';

/* SOURCE */

export const [createSource, setCreateSource] = createSignal(true);
export const [selectedSource, setSelectedSource] = createSignal('');

export const [source, setSource] = createStore({
	kind: 'GitRepository',

	name: 'podinfo',
	namespace: 'flux-system',

	gitUrl: 'https://github.com/stefanprodan/podinfo',
	helmUrl: 'https://stefanprodan.github.io/podinfo',
	ociUrl: 'oci://ghcr.io/stefanprodan/manifests/podinfo',

	// bucketEndpoint: 'minio.minio.svc.cluster.local:9000',
	bucketEndpoint: '',
	bucketName: 'podinfo',
	bucketRegion: '',
	bucketProvider: 'generic',
	bucketSecretRef: '',
	bucketAccessKey: '',
	bucketSecretKey: '',

	gitRef: 'master',
	gitRefType: 'branch',


	helmPassCredentials: false,

	ociRef: 'latest',
	ociRefType: 'tag',
	ociProvider: 'generic',

	// sync
	interval: '1m0s',
	timeout: '5m0s',

	// azure
	createFluxConfig: true,
	azureScope: 'cluster',

	// connection settings
	createSecret: false, // secretRef overrides other command authentication flags.
	secretRef: '', // this secret contains appropriate credentials for selected source type
	insecure: false, // non TLS HTTP for Bucket or OCI
	passCredentials: false, // HelmRepository
	username: '',
	password: '',
	serviceAccount: '',
	keyFile: '', // for TLS
	certFile: '',
	caFile: '',
	privateKeyFile: '', // for git
	certSecretRef : '', // OCI for TLS certs only


	recurseSubmodules: false,
} as ParamsDictionary);


/* KUSTOMIZATION */

export const [createKustomization, setCreateKustomization] = createSignal(false);

export const [kustomization, setKustomization] = createStore({
	name: 'podinfo',
	namespace: 'flux-system',
	path: '/kustomize',
	targetNamespace: 'default',
	dependsOn: '',
	prune: true,
});


export function getStore(storeName: string, variable: string) {
	const store = (storeName === 'source') ? source : kustomization;
	return () => store[variable];
}

export function setStore(storeName: string, variable: any) {
	const setter = (storeName === 'source') ? setSource : setKustomization;
	return (val: any) => setter(variable, val);
}

export function storeAccessors(props: any) {
	let get: ()=> any;
	let set: (v: any)=> any;

	get = props.get || (() => undefined);
	set = props.set || ((_: any) => undefined);

	if(props.store && props.field) {
		get = getStore(props.store, props.field);
		set = setStore(props.store, props.field);
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

