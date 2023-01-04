import  ListSelect from 'components/Common/ListSelect';
import { setSource, source } from 'lib/model';
import { params } from 'lib/params';

const setNamespace = (val: string) => setSource('namespace', val);

function Namespace() {
	return (
		<div>
			<label>Namespace</label>
			<div>
				<ListSelect
					items={() => params.namespaces}
					get={() => source.namespace}
					set={setNamespace}
					medium={true}/>
			</div>
		</div>
	);
}

export default Namespace;
