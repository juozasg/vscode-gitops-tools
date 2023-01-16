import { storeAccessors } from 'lib/model';
import { For, onMount } from 'solid-js';

function ListSelect(props: any) {
	// use <select> instead of <vscode-dropdown> because of <vscode-dropdown> initial value bugs
	let selectElement: HTMLSelectElement;

	const items = props.items;
	const {get, set} = storeAccessors(props);

	onMount(() => {
		selectElement.addEventListener('change', (e: Event) => {
			set(selectElement.value);
		});
	});

	return (
		<select ref={selectElement!} class={props.class} style={props.style}>
			<For each={items()}>{(name: string) =>
				<option selected={name === get()}>{name}</option>
			}
			</For>
		</select>
	);
}

export default ListSelect;
