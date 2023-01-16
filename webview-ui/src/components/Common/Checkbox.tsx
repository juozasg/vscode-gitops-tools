import { createEffect, onMount } from 'solid-js';
import { Checkbox as FastCheckbox} from '@microsoft/fast-foundation';
import { storeAccessors } from 'lib/model';

function Checkbox(props: any) {
	let checkboxElement: FastCheckbox;

	const {get, set} = storeAccessors(props);

	onMount(() => {
		createEffect(() => checkboxElement.checked = get());

		checkboxElement.addEventListener('change', (e: Event) => {
			set(checkboxElement.checked);
		});
	});

	return (
		<vscode-checkbox ref={checkboxElement!} style={props.style}>
			{props.children}
		</vscode-checkbox>
	);
}

export default Checkbox;
