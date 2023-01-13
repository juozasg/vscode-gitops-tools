import { createEffect, onMount } from 'solid-js';

function TextInput(props: any) {
	let inputElement!: HTMLInputElement;

	const get = props.get;
	const set = props.set;

	onMount(() => {
		createEffect(() => inputElement.value = get());

		inputElement.addEventListener('input', (e: Event) => set(inputElement.value));
	});

	return (
		<input ref={inputElement} class={props.class}></input>
	);
}

export default TextInput;

