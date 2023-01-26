import Checkbox from 'components/Common/Checkbox';
import TextInput from 'components/Common/TextInput';
import { source } from 'lib/model';
import { Show } from 'solid-js';


function SecretRefInput() {
	return (
		<div>
			<label><code>Secret</code> with  SSH and/or HTTPS credentials</label>
			<TextInput store="source" field="secretRef" class="medium"/>
		</div>
	)
	;
}

const isSSH = () => source.gitUrl.toLowerCase().indexOf('ssh') === 0;

function SSHPrivateKeyFile() {
	return (
		<div>
			<label>Path to a passwordless SSH private key file</label>
			<TextInput store="source" field="privateKeyFile" class="long"/>
		</div>
	);
}


function GitConnection() {
	return (
		<div>

			<Checkbox store="source" field="createSecret" style="margin-bottom: 1rem">Create new <code>Secret</code> with credentials&nbsp
				<a href="https://fluxcd.io/flux/components/source/gitrepositories/#secret-reference">
					<span class="codicon codicon-question"></span></a>
			</Checkbox>

			<Show when={source.createSecret} fallback={SecretRefInput}>
				<Show when={!isSSH()} fallback={SSHPrivateKeyFile}>
					<div>
						<label>HTTPS basic authentication username</label>
						<TextInput store="source" field="username" class="medium"/>
					</div>
					<div>
						<label>HTTPS basic authentication password</label>
						<TextInput store="source" field="password" class="medium" type="password"/>
					</div>
					<div>
						<label>HTTPS TLS Certificate Authority cert file</label>
						<TextInput store="source" field="caFile" class="long"/>
					</div>
				</Show>

			</Show>

		</div>
	);
}

export default GitConnection;
