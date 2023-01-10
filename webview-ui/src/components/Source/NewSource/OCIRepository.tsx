

import ListSelect from 'components/Common/ListSelect';
import { bindChangeValueFunc, bindInputStore } from 'lib/bindDirectives';
bindChangeValueFunc; bindInputStore; // TS will elide 'unused' imports
import { setSource, source } from 'lib/model';
import SettingsPanel from './Settings/OCIRepository/Panel';
import Name from './Source/Name';
import Namespace from './Source/Namespace';


const setRefType = (val: string) => setSource('ociRefType', val);

function OCIRepository() {
	return (
		<div>
			<Name/>
			<Namespace/>
			<div>
				<label>Repository URL</label>
				<input use:bindInputStore={[source, setSource, 'ociUrl']} class="long"></input>
			</div>

			<div>
				<label>Reference</label>
				<div class="flex-row">
					<ListSelect
						items={() => ['tag', 'semver', 'digest']}
						get={() => source.ociRefType}
						set={setRefType}/>
					<input use:bindInputStore={[source, setSource, 'ociRef']} style="margin-left: 4px; width: 24.8rem !important"></input>
				</div>
			</div>

			<SettingsPanel/>
		</div>
	);
}

export default OCIRepository;
