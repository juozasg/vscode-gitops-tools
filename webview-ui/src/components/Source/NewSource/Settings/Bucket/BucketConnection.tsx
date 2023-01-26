import Checkbox from 'components/Common/Checkbox';
import { ToolkitHelpLink } from 'components/Common/HelpLink';
import ListSelect from 'components/Common/ListSelect';
import TextInput from 'components/Common/TextInput';
import { setSource, source } from 'lib/model';
import { createSignal, Show } from 'solid-js';


function AzureSettings() {
	return (
		<>
			<div>
				<label>Endpoint</label>
				<TextInput store="source" field="bucketEndpoint" class="medium"/>
			</div>

			<div>
				<label><code>Secret</code> with Azure credentials <ToolkitHelpLink href="source/buckets/#azure"/>
				</label>
				<TextInput store="source" field="secretRef" class="long"/>
			</div>
		</>
	);
}

// const [createSecret, setCreateSecret] = createSignal(false);


function SecretCredentials() {
	const createSecretJsx = (
		<>
			<div>
				<label>Provider <code>accesskey</code></label>
				<TextInput store="source" field="bucketAccessKey" class="medium"/>
			</div>

			<div>
				<label>Provider <code>secretkey</code> </label>
				<TextInput store="source" field="bucketSecretKey" class="medium"/>
			</div>
		</>
	);


	const useSecretRefJsx = (
		<div>
			<label><code>Secret</code> with <code>accesskey</code> and <code>secretkey</code> credentials
			</label>
			<TextInput store="source" field="secretRef" class="long"/>
		</div>
	);

	return (
		<Show when={source.createSecret} fallback={useSecretRefJsx}>
			{createSecretJsx}
		</Show>
	);
}



function BucketPoviderSettings() {
	return (
		<Show when={source.bucketProvider !== 'azure'} fallback={<AzureSettings/>}>
			<div>
				<label>Endpoint</label>
				<TextInput store="source" field="bucketEndpoint" class="medium"/>
			</div>

			<div>
				<label>Region</label>
				<TextInput store="source" field="bucketRegion" class="medium"/>
			</div>

			<Checkbox store="source" field="createSecret" style="margin-bottom: 1rem">Create new <code>Secret</code> with credential</Checkbox>
			<ToolkitHelpLink href="source/buckets/#secret-reference"/>

			<SecretCredentials/>
		</Show>
	);

}

const providerChanged = (oldValue: any, newValue: any) => {
	if(newValue === 'azure') {
		setSource('createSecret', false);
	}
};

function BucketConnection() {
	return (
		<div>

			<div>
				<label>Bucket Provider</label>
				<div class="flex-row">
					<ListSelect
						store="source" field="bucketProvider"
						changed={providerChanged}
						items={() => ['generic', 'aws', 'azure', 'gcp']}/>
				</div>
			</div>
			{/* endpoint: storage.googleapis.com */}
			{/* endpoint: https://<account-name>.blob.core.windows.net */}

			<div>
				<label>Provider Bucket Name</label>
				<TextInput store="source" field="bucketName"/>
			</div>


			<BucketPoviderSettings/>



		</div>
	);
}

export default BucketConnection;
