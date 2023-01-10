import ListSelect from 'components/Common/ListSelect';
import { bindInputStore, bindCheckedValueFunc } from 'lib/bindDirectives';  bindInputStore; bindCheckedValueFunc; // TS will elide 'unused' imports
import { source, setSource } from 'lib/model';

const setOCIProvider = (val: string) => setSource('ociProvider', val);

function OCIConnection() {
	return (
		<div>
			<div style="margin-bottom: 1rem"><i>Authentication settings for private repositories</i></div>
			<div>
				<label>OCI Provider</label>
				<div class="flex-row">
					<ListSelect
						items={() => ['generic', 'aws', 'azure', 'gcp']}
						get={() => source.ociProvider}
						set={setOCIProvider}/>
				</div>
			</div>

			<div>
				<label><code>Secret</code> with authentication credentials for the repository <a href="https://fluxcd.io/flux/components/source/ocirepositories/#secret-reference"><span class="codicon codicon-question"></span></a></label>
				<input use:bindInputStore={[source, setSource, 'secretRef']} class="long"></input>
			</div>

			<div>
				<label><code>ServiceAccount</code> with image pull secrets for authentication</label>
				<input use:bindInputStore={[source, setSource, 'serviceAccount']} class="long"></input>
			</div>

		</div>
	);
}

export default OCIConnection;
