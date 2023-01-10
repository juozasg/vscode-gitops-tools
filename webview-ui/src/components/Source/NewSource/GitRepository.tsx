import ListSelect from 'components/Common/ListSelect';
import { bindInputStore } from 'lib/bindDirectives'; bindInputStore; // TS will elide 'unused' imports

import { setSource, source } from 'lib/model';
import SettingsPanel from './Settings/GitRepository/Panel';
import Name from './Source/Name';
import Namespace from './Source/Namespace';


const setRefType = (val: string) => setSource('gitRefType', val);

function GitRepository() {
	return (
		<div>
			<Name/>
			<Namespace/>

			<div>
				<label>Repository URL</label>
				<input use:bindInputStore={[source, setSource, 'gitUrl']} class="long"></input>
			</div>

			<div>
				<label>Reference</label>
				<div class="flex-row">
					<ListSelect
						items={() => ['branch', 'tag', 'semver']}
						get={() => source.gitRefType}
						set={setRefType}/>
					<input use:bindInputStore={[source, setSource, 'gitRef']} style="margin-left: 4px; width: 24.8rem !important"></input>
				</div>
			</div>

			<SettingsPanel/>
		</div>


	);
}

export default GitRepository;
