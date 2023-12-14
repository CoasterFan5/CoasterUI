<script lang="ts">
	import { onMount } from 'svelte';

	import StyleHelper from "./StyleHelper.svelte";

	//basic options
	export let style = ""

	//options
	export let name = 'Input';
	export let label = 'Input';
	export let type: 'password' | 'email' | undefined = undefined;
	export let required = false;
	export let autocomplete: HTMLInputElement['autocomplete'] | null = null;


	let moveText = false;

	let input: HTMLInputElement;
	export let value: string = '';

	let startFocus = () => input.focus();

	let selectInput = () => {
		active = true;
		moveText = true;
	};
	let deselectText = () => {
		active = false;
		if (value.length > 0) {
			moveText = true;
		} else {
			moveText = false;
		}
	};

	onMount(() => {
		value = value;
		if (value) {
			active = false;
			moveText = true;
		} else {
			active = false;
			moveText = false;
		}
	});
	let active = false;
</script>

<StyleHelper>
	<button
	style={style}
	class="wrap"
	class:active
	tabindex="-1"
	type="button"
	on:click={startFocus}
	>
		<input
			bind:this={input}
			{name}
			{autocomplete}
			{required}
			on:focus={selectInput}
			on:blur={deselectText}
			bind:value
			{...{ type /* asserting string input since we know the type is always a password */ }}
		/>
		<div class="labelBase" class:label1={!moveText} class:labelMoved={moveText}>
			{label}
		</div>
	</button>
</StyleHelper>


<style>
	.wrap {
		all: unset;
		position: relative;
		width: 100%;
		border-radius: 3px;
		border: 1px solid var(--cui_accent);
		cursor: text;
		box-sizing: border-box;
	}

	input {
		all: unset;
		border: 0px;
		outline: 0px;
		box-sizing: border-box;
		padding: 10px;
		border-radius: 3px;
		font-size: 1.2rem;
		width: 100%;
		font-family: 'Lexend Variable', sans-serif;
		background: transparent;
		background: var(--cui_background);
	}

	.labelBase {
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}

	.label1 {
		font-size: 1.12rem;
		font-weight: 400;
		box-sizing: border-box;
		padding: 10px;
		top: 0px;
		left: 0px;
		position: absolute;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		background: transparent;
		color: #333;
		background-image: none;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
		opacity: 0.5;
	}

	.labelMoved {
		font-size: 0.8rem;
		position: absolute;
		top: -10px;
		left: 10px;
		padding: 0px 5px;
		color: var(--cui_text);
		background: var(--cui_background);
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}

	.active {
		border: 1px solid var(--cui_primary);
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}
</style>