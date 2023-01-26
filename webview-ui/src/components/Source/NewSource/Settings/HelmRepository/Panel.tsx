import Checkbox from 'components/Common/Checkbox';
import { Collapse } from 'solid-collapse';
import { createSignal } from 'solid-js';
import Intervals from '../Intervals';
import Connection from './HelmConnection';

function Panel() {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div class="collapsable">
			<h3 classList={{'collapse-toggle': true, 'open': isOpen()}}
				onClick={() => setIsOpen(!isOpen())}><span class={`codicon ${isOpen() ? 'codicon-chevron-down' : 'codicon-chevron-right'}`}></span> Advanced Settings</h3>
			<Collapse value={isOpen()} class="collapse-transition">
				<div style="margin-bottom: 1rem">
					<Checkbox store="source" field="helmPassCredentials">
							Pass credentials to all domains (HTTP/S repositories only) <a href="https://fluxcd.io/flux/components/source/helmrepositories/#pass-credentials"><span class="codicon codicon-question"></span></a>
					</Checkbox>
				</div>
				<Intervals/>
			</Collapse>
		</div>
	);
}

export default Panel;
