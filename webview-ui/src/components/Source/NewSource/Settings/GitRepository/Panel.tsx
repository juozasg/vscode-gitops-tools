import { createSignal, Show } from 'solid-js';
import { Collapse } from 'solid-collapse';

import Connection from './GitConnection';
import Azure from './Azure';
import { params } from 'lib/params';
import SettingsIntervals from '../Intervals';
import Checkbox from 'components/Common/Checkbox';

function Panel() {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div class="collapsable">
			<h3 classList={{'collapse-toggle': true, 'open': isOpen()}}
				onClick={() => setIsOpen(!isOpen())}><span class={`codicon ${isOpen() ? 'codicon-chevron-down' : 'codicon-chevron-right'}`}></span> Advanced Settings</h3>
			<Collapse value={isOpen()} class="collapse-transition">
				<div>
					<vscode-panels activeId="git-intervals-tab" aria-label="Advanced GitRepository source settings">
						<vscode-panel-tab id="git-intervals-tab">Intervals</vscode-panel-tab>
						<Show when={params.clusterInfo?.isAzure}>
							<vscode-panel-tab id="git-azure-tab">Azure</vscode-panel-tab>
						</Show>
						<vscode-panel-tab id="git-other-tab">Other</vscode-panel-tab>

						<vscode-panel-view>
							<SettingsIntervals/>
						</vscode-panel-view>

						<Show when={params.clusterInfo?.isAzure}>
							<vscode-panel-view >
								<Azure/>
							</vscode-panel-view>
						</Show>

						<vscode-panel-view>
							<div>
								<Checkbox store="gitRepository" field="recurseSubmodules">
										Recurse submodules
								</Checkbox>
								<div><i>When enabled, configures the GitRepository source to initialize and include Git submodules in the artifact it produces</i></div>
							</div>
						</vscode-panel-view>

					</vscode-panels>
				</div>
			</Collapse>
		</div>
	);
}

export default Panel;
