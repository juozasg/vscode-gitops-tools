import Checkbox from 'components/Common/Checkbox';
import { Collapse } from 'solid-collapse';
import { createSignal } from 'solid-js';
import SettingsIntervals from '../Intervals';
import SettingsTLS from './OCITLS';

function Panel() {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div class="collapsable">
			<h3 classList={{'collapse-toggle': true, 'open': isOpen()}}
				onClick={() => setIsOpen(!isOpen())}><span class={`codicon ${isOpen() ? 'codicon-chevron-down' : 'codicon-chevron-right'}`}></span> Advanced Settings</h3>
			<Collapse value={isOpen()} class="collapse-transition">
				<div>
					<SettingsTLS/>
					<SettingsIntervals/>
					<div style="margin-bottom: 1rem">
						<Checkbox store="ociRepository" field="ignorePaths">
							Paths to ignore resources (can specify multiple paths with commas: path1,path2)
						</Checkbox>
					</div>

				</div>
			</Collapse>
		</div>
	);
}

export default Panel;
