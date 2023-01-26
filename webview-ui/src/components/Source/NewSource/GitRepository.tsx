import ListSelect from 'components/Common/ListSelect';
import TextInput from 'components/Common/TextInput';

import SettingsPanel from './Settings/GitRepository/Panel';
import Name from './Common/Name';
import Namespace from './Common/Namespace';
import GitConnection from './Settings/GitRepository/GitConnection';

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
						store="source" field="gitRefType"
						items={() => ['branch', 'tag', 'semver']}/>
					<TextInput store="source" field="gitRef" style="margin-left: 4px; width: 24.8rem !important"/>
				</div>
			</div>
			<vscode-divider/>

			<GitConnection/>
			<SettingsPanel/>
		</div>
	);
}

export default GitRepository;
