import ListSelect from 'components/Common/ListSelect';
import TextInput from 'components/Common/TextInput';
import { source, setSource } from 'lib/model';

function OCIConnection() {
	return (
		<div>
			<div style="margin-bottom: 1rem"><i>Authentication settings for private repositories</i></div>
			<div>
				<label>OCI Provider</label>
				<div class="flex-row">
					<ListSelect
						store="source" field="ociProvider"
						items={() => ['generic', 'aws', 'azure', 'gcp']}/>
				</div>
			</div>

			<div>
				<label><code>Secret</code> with authentication credentials for the repository <a href="https://fluxcd.io/flux/components/source/ocirepositories/#secret-reference"><span class="codicon codicon-question"></span></a></label>
				<TextInput store="source" field="secretRef" class="long"/>
			</div>

			<div>
				<label><code>ServiceAccount</code> with image pull secrets for authentication</label>
				<TextInput store="source" field="serviceAccount" class="long"/>
			</div>

		</div>
	);
}

export default OCIConnection;
