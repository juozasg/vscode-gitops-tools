import { Show } from 'solid-js';

import TextInput from 'components/Common/TextInput';
import { isOCIHelm } from '../../HelmRepository';
import Checkbox from 'components/Common/Checkbox';


function HelmConnection() {
	return (
		<div>
			<div>
				<label><code>Secret</code> with authentication credentials (TLS, basic auth or docker-secret) <a href="https://fluxcd.io/flux/components/source/helmrepositories/#secret-reference"><span class="codicon codicon-question"></span></a></label>
				<TextInput store="source" field="secretRef" class="long"/>
			</div>

			<Show when={!isOCIHelm()}>
				<div>
					<label>Path to TLS cert file</label>
					<TextInput store="source" field="certFile" class="long"/>
				</div>

				<div>
					<label>Path to TLS key file</label>
					<TextInput store="source" field="keyFile" class="long"/>
				</div>

				<div>
					<label>Path to TLS CA cert file </label>
					<TextInput store="source" field="caFile" class="long"/>
				</div>

				<div>
					<label>Basic authentication username</label>
					<TextInput store="source" field="username" class="medium"/>
				</div>

				<div>
					<label>Basic authentication password</label>
					<TextInput store="source" field="password" type="password" class="medium"/>
				</div>

				<div style="margin-bottom: 1rem">
					<Checkbox store="source" field="helmPassCredentials">
						Pass credentials to all domains (HTTP/S repositories only) <a href="https://fluxcd.io/flux/components/source/helmrepositories/#pass-credentials"><span class="codicon codicon-question"></span></a>
					</Checkbox>
				</div>
			</Show>
		</div>
	);
}

export default HelmConnection;
