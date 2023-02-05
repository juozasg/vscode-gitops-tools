import { params } from 'lib/params';
import ListSelect from 'components/Common/ListSelect';

const namespacedSources = () => params.sources.map((s: any) => `${s.kind}/${s.name}.${s.namespace}`).sort();

function SelectSource() {
	return (
		<div>
			<ListSelect
				items={namespacedSources}
				store="kustomization" field="source"
				class='medium'/>
		</div>
	);
}

export default SelectSource;
