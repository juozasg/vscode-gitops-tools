import Checkbox from 'components/Common/Checkbox';
import { ToolkitHelpLink } from 'components/Common/HelpLink';
import TextInput from 'components/Common/TextInput';


function OCITLS() {
	return (
		<div>
			<div style="margin-bottom: 1rem">
				<Checkbox store="ociRepository" field="insecure">
						Allow insecure (non-TLS) connection to the registry <ToolkitHelpLink href="source/ocirepositories/#insecure"/>
				</Checkbox>
			</div>
		</div>
	);
}

export default OCITLS;
