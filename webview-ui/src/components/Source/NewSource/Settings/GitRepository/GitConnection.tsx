import Checkbox from 'components/Common/Checkbox';
import TextInput from 'components/Common/TextInput';

function GitConnection() {
	return (
		<div>
			<div>
				<label>The name of an existing secret containing SSH or basic credentials</label>
				<TextInput store="source" field="secretRef" class="medium"/>
			</div>

			<vscode-divider/>
			<div>
				<label>Path to TLS CA cert file </label>
				<TextInput store="source" field="caFile" class="long"/>
			</div>
			<div>
				<label>Path to a passwordless SSH private key file</label>
				<TextInput store="source" field="privateKeyFile" class="long"/>
			</div>
			<div>
				<label>Basic authentication username</label>
				<TextInput store="source" field="username" class="medium"/>
			</div>
			<div>
				<label>Basic authentication password</label>
				<TextInput store="source" field="password" class="medium" type="password"/>
			</div>

			<vscode-divider/>

			<div style="margin-top: 1rem">
				<Checkbox store="source" field="recurseSubmodules">
					Recurse submodules
				</Checkbox>
				<div><i>When enabled, configures the GitRepository source to initialize and include Git submodules in the artifact it produces</i></div>
			</div>
		</div>
	);
}

export default GitConnection;
