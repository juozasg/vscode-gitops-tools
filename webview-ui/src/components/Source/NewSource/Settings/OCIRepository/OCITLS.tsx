import Checkbox from 'components/Common/Checkbox';
import TextInput from 'components/Common/TextInput';


function OCITLS() {
	return (
		<div>
			<div style="margin-bottom: 1rem">
				<Checkbox store="source" field="insecure">
            Allow insecure (non-TLS) connection to the registry
				</Checkbox>
			</div>

			<div>
				<label><code>Secret</code> used for TLS certificates
					<a href="https://fluxcd.io/flux/components/source/ocirepositories/#tls-certificates">
						<span class="codicon codicon-question"></span>
					</a>
				</label>
				<TextInput store="source" field="certRef" class="long"/>
			</div>
		</div>
	);
}

export default OCITLS;
