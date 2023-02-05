import { KeyObject } from 'crypto';
import { SourceObjectKinds } from '../kubernetes/types/kubernetesTypes';





const source = {
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

	recurseSubmodules: false
};



createSourceCLIArgs(source.kind as SourceObjectKinds, source);


// user data from webui
export function createSourceCLIArgs(kind: SourceObjectKinds, data: any): string {
	let argsString = '';

	for(cosnt [key, value] in)

	for (const [key, val] of Object.entries(data)) {
		argsString += addArg(kind, key, val)
	}
}

const commonArgs = ['url', 'name', 'namespace', 'interval', 'timeout', 'secretRef'];
const GitReosiporyArgs = ['branch', 'tag', ]




function createSourceGitCommand(args: CreateSourceGitGenericArgs) {
	const urlArg = ` --url "${args.url}"`;
	const namespaceArg = args.namespace ? ` --namespace "${args.namespace}"` : '';
	const branchArg = args.branch ? ` --branch "${args.branch}"` : '';
	const tagArg = args.tag ? ` --tag "${args.tag}"` : '';
	const semverArg = args.semver ? ` --tag-semver "${args.semver}"` : '';
	const intervalArg = args.interval ? ` --interval "${args.interval}"` : '';
	const timeoutArg = args.timeout ? ` --timeout "${args.timeout}"` : '';
	const caFileArg = args.caFile ? ` --ca-file "${args.caFile}"` : '';
	const privateKeyFileArg = args.privateKeyFile ? ` --private-key-file "${args.privateKeyFile}"` : '';
	const usernameArg = args.username ? ` --username "${args.username}"` : '';
	const passwordArg = args.password ? ` --password "${args.password}"` : '';
	const secretRefArg = args.secretRef ? ` --secret-ref "${args.secretRef}"` : '';
	const recurseSubmodules = args.recurseSubmodules ? ' --recurse-submodules' : '';
	const sshKeyAlgorithm = args.sshKeyAlgorithm ? ` --ssh-key-algorithm "${args.sshKeyAlgorithm}"` : '';
	const sshEcdsaCurve = args.sshEcdsaCurve ? ` --ssh-ecdsa-curve "${args.sshEcdsaCurve}"` : '';
	const sshRsaBits = args.sshRsaBits ? ` --ssh-rsa-bits "${args.sshRsaBits}"` : '';

	return `flux create source git ${args.sourceName}${urlArg}${branchArg}${namespaceArg}${tagArg}${semverArg}${intervalArg}${timeoutArg}${caFileArg}${privateKeyFileArg}${usernameArg}${passwordArg}${secretRefArg}${recurseSubmodules}${sshKeyAlgorithm}${sshEcdsaCurve}${sshRsaBits}`;
}



createSourceOCICommand(args: CreateSourceOCIGenericArgs) {

	args += `--${args[0].snakecase}`;

	// const urlArg = ` --url "${args.url}"`;
	const namespaceArg = args.namespace ? ` --namespace "${args.namespace}"` : '';
	const digestArg = args.digest ? ` --digest "${args.digest}"` : '';
	const tagArg = args.tag ? ` --tag "${args.tag}"` : '';
	const semverArg = args.semver ? ` --tag-semver "${args.semver}"` : '';
	const intervalArg = args.interval ? ` --interval "${args.interval}"` : '';
	const timeoutArg = args.timeout ? ` --timeout "${args.timeout}"` : '';
	const certRefArg = args.certRef ? ` --cert-ref "${args.certRef}"` : '';
	const secretRefArg = args.secretRef ? ` --secret-ref "${args.secretRef}"` : '';
	const serviceAccountArg = args.serviceAccount ? ` --service-account "${args.serviceAccount}"` : '';
	const insecureArg = args.insecure ? ' --insecure' : '';
	const providerArg = args.ociProvider ? ` --provider ${args.ociProvider}` : ' --provider generic';

	return `flux create source oci ${args.sourceName}${urlArg}${digestArg}${namespaceArg}${tagArg}${semverArg}${intervalArg}${timeoutArg}${certRefArg}${secretRefArg}${serviceAccountArg}${insecureArg}${providerArg}`;
}



function async createSourceGit(args: {
	sourceName: string;
	url: string;
	namespace?: string;
	branch?: string;
	tag?: string;
	semver?: string;
	interval?: string;
	timeout?: string;
	caFile?: string;
	privateKeyFile?: string;
	username?: string;
	password?: string;
	secretRef?: string;
	recurseSubmodules?: boolean;
	sshKeyAlgorithm?: string;
	sshEcdsaCurve?: string;
	sshRsaBits?: string;
}) {

	const command = this.createSourceGitCommand(args);
	const createSourceShellResult = await shell.execWithOutput(`${command} --silent`);

	if (createSourceShellResult.code !== 0) {
		// shell always fails in SSH case (without specifying any key) (as reconciliation error)
	}

	const output = createSourceShellResult.stdout || createSourceShellResult.stderr;

	// parse deploy key if the repository url is using SSH protocol
	let deployKey: string | undefined;
	const lines = this.splitLines(output);
	const deployKeyPrefix = `${FluxOutputSymbols.Plus} deploy key:`;
	for (const line of lines) {
		if (line.startsWith(deployKeyPrefix)) {
			deployKey = line.slice(deployKeyPrefix.length).trim();
		}
	}

	if (!deployKey) {
		return;
	}

	return {
		deployKey,
	};
}