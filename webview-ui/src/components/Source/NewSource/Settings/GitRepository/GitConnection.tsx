import { bindInputStore, bindCheckedValueFunc } from '../../../../../lib/bindDirectives';  bindInputStore; bindCheckedValueFunc; // TS will elide 'unused' imports
import { source, setSource } from '../../../../../lib/model';

function setGoGitImplementation(checked: boolean) {
	if(checked) {
		setSource('gitImplementation', 'go-git');
	}
}

function setLibGit2Implementation(checked: boolean) {
	if(checked) {
		setSource('gitImplementation', 'libgit2');
	}
}

function GitConnection() {
	return (
		<div>
			<div>
				<label>The name of an existing secret containing SSH or basic credentials</label>
				<input use:bindInputStore={[source, setSource, 'secretRef']} class="medium"></input>
			</div>

			<vscode-divider/>
			<div>
				<label>Path to TLS CA cert file </label>
				<input use:bindInputStore={[source, setSource, 'caFile']} class="long"></input>
			</div>
			<div>
				<label>Path to a passwordless SSH private key file</label>
				<input use:bindInputStore={[source, setSource, 'privateKeyFile']} class="long"></input>
			</div>
			<div>
				<label>Basic authentication username</label>
				<input use:bindInputStore={[source, setSource, 'username']} class="medium"></input>
			</div>
			<div>
				<label>Basic authentication password</label>
				<input use:bindInputStore={[source, setSource, 'password']} type="password" class="medium"></input>
			</div>


			<vscode-divider/>

			<div style="margin-top: 1rem">
				<vscode-checkbox use:bindCheckedValueFunc={(checked: boolean) => setSource('recurseSubmodules', checked)}>
            Recurse submodules
				</vscode-checkbox>
				<div><i>When enabled, configures the GitRepository source to initialize and include Git submodules in the artifact it produces</i></div>
			</div>
		</div>
	);
}

export default GitConnection;
