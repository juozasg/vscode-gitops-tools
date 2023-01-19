import ListSelect from 'components/Common/ListSelect';
import { setSource, source } from 'lib/model';
import SettingsPanel from './Settings/OCIRepository/Panel';
import Name from './Common/Name';
import Namespace from './Common/Namespace';
import TextInput from 'components/Common/TextInput';


const setRefType = (val: string) => setSource('ociRefType', val);

function OCIRepository() {
	return (
		<div>
			<Name/>
			<Namespace/>
			<div>
				<label>Repository URL</label>
				<TextInput store="source" field="ociUrl" class="long"/>
			</div>

			<div>
				<label>Reference</label>
				<div class="flex-row">
					<ListSelect
						store="source" field="ociRefType"
						items={() => ['tag', 'semver', 'digest']}/>
					<TextInput store="source" field="ociRef" style="margin-left: 4px; width: 24.8rem !important"/>
				</div>
			</div>

			<SettingsPanel/>
		</div>
	);
}

export default OCIRepository;
