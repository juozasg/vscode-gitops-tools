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


				</div>
			</Collapse>
		</div>
	);
}

export default Panel;
