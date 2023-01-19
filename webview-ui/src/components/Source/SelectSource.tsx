import { createEffect, For } from 'solid-js';
import { selectedSource, setSelectedSource } from 'lib/model';

import { params } from 'lib/params';
import { debug } from 'lib/utils/debug';
import ListSelect from 'components/Common/ListSelect';


createEffect(() => {
	debug(`selectedSource()=${selectedSource()}`);
});

const namespacedSources = () => params.sources.map((s: any) => `${s.kind}/${s.name}.${s.namespace}`).sort();

function SelectSource() {
	return (
		<div>
			<ListSelect
				items={namespacedSources}
				get={selectedSource}
				set={setSelectedSource}
				class='medium'/>
		</div>
	);
}

export default SelectSource;
