import { For, onMount } from 'solid-js';


function ListSelect(props: any) {
	let selectElement: HTMLSelectElement | undefined;

	const items = props.items;
	const get = props.get;
	const set = props.set;
	const classList = {medium: props.medium};

	onMount(() => {
		selectElement?.addEventListener('change', (e: Event) => {
			set(selectElement?.value);
		});
	});

	return (
		<select ref={selectElement} classList={classList}>
			<For each={items()}>{(name: string) =>
				<option selected={name === get()}>{name}</option>
			}
			</For>
		</select>
	);
}

export default ListSelect;
