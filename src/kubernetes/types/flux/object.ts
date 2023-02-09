import { KubernetesObjectKinds } from '../kubernetesTypes';
import { Bucket } from './bucket';
import { GitRepository } from './gitRepository';
import { HelmRepository } from './helmRepository';
import { OCIRepository } from './ociRepository';

export type FluxSourceObject = GitRepository | OCIRepository | HelmRepository | Bucket;

export const FluxSourceKinds: string[] = [
	KubernetesObjectKinds.GitRepository,
	KubernetesObjectKinds.OCIRepository,
	KubernetesObjectKinds.HelmRepository,
	KubernetesObjectKinds.Bucket,
];


export function namespacedObject(resource?: FluxSourceObject): string | undefined {
	if(resource) {
		return `${resource.kind}/${resource.metadata.name}.${resource.metadata.namespace}`;
	}
}
