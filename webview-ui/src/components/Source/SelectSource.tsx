import { createEffect, For } from 'solid-js';
import { selectedSource, setSelectedSource } from 'lib/model';

import { params } from 'lib/params';
import { debug } from 'lib/utils/debug';
import ListSelect from 'components/Common/ListSelect';


createEffect(() => {
	debug(`selectedSource()=${selectedSource()}`);
});

// function createOption(name: string, i: any) {
// 	if(i() === 0 && selectedSource() === '') {
// 		setSelectedSource(name);
// 	}

// 	// TODO: add namespace and kind
// 	return <vscode-option>{name}</vscode-option>;
// }

const namespacedSources = () => params.sources.map((s: any) => `${s.kind}/${s.namespace}.${s.name}`).sort();

function SelectSource() {
	return (
		<div>
			{/* <vscode-dropdown use:bindChangeValueSignal={[selectedSource, setSelectedSource]} position="below" class="medium">
				<For each={params.sources}>
					{(name: string, i: any) => createOption(name, i)}
				</For>

			</vscode-dropdown> */}

			<ListSelect
				items={namespacedSources}
				get={selectedSource}
				set={setSelectedSource}
				medium={true}/>


		</div>
	);
}

export default SelectSource;
