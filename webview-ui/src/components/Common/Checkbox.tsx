import { createEffect, onMount } from 'solid-js';
import { Checkbox as FastCheckbox} from '@microsoft/fast-foundation';

function Checkbox(props: any) {
	let checkboxElement!: FastCheckbox;

	const get = props.get;
	const set = props.set;

	onMount(() => {
		createEffect(() => checkboxElement.checked = get());

		checkboxElement.addEventListener('change', (e: Event) => {
			set(checkboxElement.checked);
		});
	});

	return (
		<vscode-checkbox ref={checkboxElement}>
			{props.children}
		</vscode-checkbox>
	);
}

export default Checkbox;
