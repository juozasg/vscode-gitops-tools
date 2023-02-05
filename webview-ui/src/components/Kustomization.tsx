import { Show } from 'solid-js';

import { createWorkload, createSource, selectedSource, setCreateWorkload, source, gitRepository } from 'lib/model';
import { params } from 'lib/params';
import ListSelect from 'components/Common/ListSelect';
import Checkbox from 'components/Common/Checkbox';
import TextInput from './Common/TextInput';
import { ToolkitHelpLink } from './Common/HelpLink';

function Kustomization() {
	const repositoryName = () => createSource() ? source.name : selectedSource();

	const isAzure = () => params.clusterInfo?.isAzure && (!createSource() || (source.kind === 'GitRepository' && gitRepository.createFluxConfig));

	const targetNamespaces = () => [...(params.namespaces?.values() || []), '<unset>'];

	return(
		<div>
			<h2>Create Kustomization <ToolkitHelpLink href="kustomize/kustomization/"/></h2>
			<div style="margin-top: 1rem; margin-bottom: 2rem">
				<Show when={createSource()}>
					<Checkbox get={createWorkload} set={setCreateWorkload}>
						Create a <code>Kustomization</code>
					</Checkbox>
				</Show>
			</div>
			<Show when={createWorkload()}>
				<div>
					<label><code>Kustomization</code> Name</label>
					<TextInput store="kustomization" field="name" class="medium"/>
				</div>
				<Show when={!isAzure()}>
					<div>
						<label>Namespace</label>
						<div>
							<ListSelect
								store="kustomization" field="namespace"
								items={() => params.namespaces}
								class='medium'/>
						</div>

					</div>
				</Show>
				<div>
					<label>File path in <code>GitRepository</code> '{repositoryName()}'</label>
					<TextInput store="kustomization" field="path" class="long"/>
				</div>
				<Show when={!isAzure()}>
					<div>
						<label>Target Namespace</label>
						<div>
							<ListSelect
								store="kustomization" field="targetNamespace"
								items={targetNamespaces}
								class={'medium'}/>
							<div style="margin-top: -1rem"><i>Namespace for objects reconciled by the <code>Kustomization</code></i></div>
						</div>
					</div>
				</Show>
				<div style="margin-top: 1.5rem">
					<label>Depends on <code>Kustomizations</code></label>
					<TextInput store="kustomization" field="dependsOn" class="long"/>
				</div>

				<div >
					<Checkbox store="kustomization" field="prune">
						Prune (remove stale resources)
					</Checkbox>
				</div>

			</Show>
		</div>
	);
}

export default Kustomization;
