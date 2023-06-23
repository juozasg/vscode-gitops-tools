import { env } from 'vscode';
import { SourceNode } from '../treeviews/nodes/sourceNode';
import { WorkloadNode } from '../treeviews/nodes/workloadNode';

/**
 * Copy to clipboard any resource node name.
 */
export function copyResourceName(resourceNode: SourceNode | WorkloadNode) {
	const name = resourceNode.resource.metadata.name;

	if (!name) {
		return;
	}

	env.clipboard.writeText(name);
}
