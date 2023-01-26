import { setParams } from '../params';

export function debug(str: string) {
	const e = document.getElementById('debug');
	if(e) {
		e.innerHTML = `${e.innerHTML}\n${str}`;
		// e.style.display = 'block';
		e.scrollTop = e.scrollHeight;
	}
}

export function debugStandalone() {
	const debugParams = {
		'clusterInfo': {
			'contextName': 'kind-context',
			'clusterName': 'kind-cluster',
			'clusterProvider': 'Generic',
			'isClusterProviderUserOverride': false,
			'isAzure': true,
		},
		'gitInfo': {
			'name': 'debug-standalone',
			'url': 'ssh://git@github.com/juozasg/pooodinfo.git',
			'branch': 'master',
		},
		'namespaces': [ 'default', 'flux-system', 'foobar'],
		// 'sources': ['podinfo', 'podinfo2', 'podinfo11'],
		'sources': [
			{'name': 'podinfo', 'kind': 'GitRepository', 'namespace': 'default'},
			{'name': 'podinfo', 'kind': 'OCIRepository', 'namespace': 'default'},
			{'name': 'podinfo', 'kind': 'OCIRepository', 'namespace': 'flux-system'},
			{'name': 'podinfo2', 'kind': 'GitRepository', 'namespace': 'default'},
			{'name': 'podinfo11', 'kind': 'OCIRepository', 'namespace': 'default'}],
		'selectSourceTab': false,
		'selectedSource': 'GitRepository/default.podinfo2',
	};

	setTimeout(() => {
		for(const [param, value] of Object.entries(debugParams)) {
			setParams(param, value);
		}
	}, 300);
}
