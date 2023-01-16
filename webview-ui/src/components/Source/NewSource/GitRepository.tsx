import ListSelect from 'components/Common/ListSelect';
import TextInput from 'components/Common/TextInput';

import SettingsPanel from './Settings/GitRepository/Panel';
import Name from './Source/Name';
import Namespace from './Source/Namespace';

function GitRepository() {
	return (
		<div>
			<Name/>
			<Namespace/>

			<div>
				<label>Repository URL</label>
				<TextInput store="source" field="gitUrl" class="long"/>
			</div>

			<div>
				<label>Reference</label>
				<div class="flex-row">
					<ListSelect
						items={() => ['branch', 'tag', 'semver']}
						store="source" field="gitRefType"/>
					<TextInput store="source" field="gitRef" style="margin-left: 4px; width: 24.8rem !important"/>
				</div>
			</div>

			<SettingsPanel/>
		</div>
	);
}

export default GitRepository;
