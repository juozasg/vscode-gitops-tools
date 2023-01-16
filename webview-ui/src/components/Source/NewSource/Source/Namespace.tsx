import  ListSelect from 'components/Common/ListSelect';
import { params } from 'lib/params';

function Namespace() {
	return (
		<div>
			<label>Namespace</label>
			<div>
				<ListSelect
					items={() => params.namespaces}
					store="source" field="namespace"
					class="medium"/>
			</div>
		</div>
	);
}

export default Namespace;
