import { Show } from 'solid-js';

import { createKustomization, createSource, kustomization, selectedSource, setCreateKustomization, setKustomization, source } from 'lib/model';
import { params } from 'lib/params';
import ListSelect from 'components/Common/ListSelect';
import Checkbox from 'components/Common/Checkbox';


const setNamespace = (val: string) => setKustomization('namespace', val);
const setTargetNamespace = (val: string) =>	setKustomization('targetNamespace', val);

function Kustomization() {
	const repositoryName = () => createSource() ? source.name : selectedSource();

	const isAzure = () => params.clusterInfo?.isAzure && (!createSource() || source.createFluxConfig);

	const targetNamespaces = () => [...(params.namespaces?.values() || []), '<unset>'];

	return(
		<div>
			<h2>Create Kustomization <a href="https://fluxcd.io/flux/components/kustomize/kustomization/"><span class="codicon codicon-question"></span></a></h2>
			<div style="margin-top: 1rem; margin-bottom: 2rem">
				<Show when={createSource()}>
					<Checkbox get={createKustomization} set={setCreateKustomization}>
						Create a <code>Kustomization</code>
					</Checkbox>
				</Show>
			</div>
			<Show when={createKustomization()}>
				<div>
					<label><code>Kustomization</code> Name</label>
					<input use:bindInputStore={[kustomization, setKustomization, 'name']} class="medium"></input>
				</div>
				<Show when={!isAzure()}>
					<div>
						<label>Namespace</label>
						<div>
							<ListSelect
								items={() => params.namespaces}
								get={() => kustomization.namespace}
								set={setNamespace}
								class='medium'/>
						</div>

					</div>
				</Show>
				<div>
					<label>File path in <code>GitRepository</code> '{repositoryName()}'</label>
					<input use:bindInputStore={[kustomization, setKustomization, 'path']} class="long"></input>
				</div>
				<Show when={!isAzure()}>
					<div>
						<label>Target Namespace</label>
						<div>
							<ListSelect
								items={targetNamespaces}
								get={() => kustomization.targetNamespace}
								set={setTargetNamespace}
								class={'medium'}/>
							<div style="margin-top: -1rem"><i>Namespace for objects reconciled by the <code>Kustomization</code></i></div>
						</div>
					</div>
				</Show>
				<div style="margin-top: 1.5rem">
					<label>Depends on <code>Kustomizations</code></label>
					<input use:bindInputStore={[kustomization, setKustomization, 'dependsOn']} class="long"></input>
				</div>

				<div >
					<vscode-checkbox checked use:bindCheckedValueFunc={(checked: boolean) => setKustomization('prune', checked)}>
						Prune (remove stale resources)
					</vscode-checkbox>
				</div>

			</Show>
		</div>
	);
}

export default Kustomization;
