import Checkbox from 'components/Common/Checkbox';
import ListSelect from 'components/Common/ListSelect';
import TextInput from 'components/Common/TextInput';
import { source } from 'lib/model';
import { createSignal, Show } from 'solid-js';


function AzureSettings() {
	return (
		<>
			<div>
				<label>Endpoint</label>
				<TextInput store="source" field="bucketEndpoint" class="medium"/>
			</div>

			<div>
				<label><code>Secret</code> with Azure credentials&nbsp;
					<a href="https://fluxcd.io/flux/components/source/buckets/#azure">
						<span class="codicon codicon-question"></span></a>
				</label>
				<TextInput store="source" field="secretRef" class="long"/>
			</div>
		</>
	);
}

const [createSecret, setCreateSecret] = createSignal(true);


const dbset = (val: any) => {
	console.log(val);
	setCreateSecret(val);
	console.log(createSecret);
};

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
			<label><code>Secret</code> with <code>accesskey</code> and <code>secretkey</code> credentials&nbsp
				<a href="https://fluxcd.io/flux/components/source/buckets/#secret-reference">
					<span class="codicon codicon-question"></span></a>
			</label>
			<TextInput store="source" field="secretRef" class="long"/>
		</div>
	);

	return (
		<Show when={createSecret()} fallback={useSecretRefJsx}>
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

			<Checkbox get={createSecret} set={dbset} style="margin-bottom: 1rem">Create <code>Secret</code></Checkbox>

			<SecretCredentials/>
		</Show>
	);

}


function BucketConnection() {
	return (
		<div>


			<div>
				<label>Bucket Provider</label>
				<div class="flex-row">
					<ListSelect
						store="source" field="bucketProvider"
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
