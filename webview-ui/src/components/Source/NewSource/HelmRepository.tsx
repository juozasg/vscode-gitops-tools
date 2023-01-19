
import TextInput from 'components/Common/TextInput';
import { source } from '../../../lib/model';
import Name from './Common/Name';
import Namespace from './Common/Namespace';

import SettingsPanel from './Settings/HelmRepository/Panel';

export const isOCIHelm = () => source.helmUrl.indexOf('oci://') === 0;

function HelmRepository() {
	return (
		<div>
			<Name/>
			<Namespace/>
			<div>
				<label>Repository URL</label>
				<TextInput store="source" field="helmUrl" class="long"/>
			</div>
			<SettingsPanel/>
		</div>
	);
}

export default HelmRepository;
