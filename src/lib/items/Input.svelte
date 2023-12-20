<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment'; 
	import StyleHelper from "../StyleHelper.svelte";

	//basic options
	export let style = ""

	//options
	export let name = 'Input';
	export let label = 'Input';
	export let type: 'password' | 'email' | undefined = undefined;
	export let required = false;
	export let autocomplete: HTMLInputElement['autocomplete'] | null = null;
	export let pattern: RegExp | undefined = undefined;
	export let value: string = ""

	let enableJS = false;
	let active = true;
	let ready = false;

	onMount(() => {
		ready = false;
		enableJS = true;
		if(value) {
			active = true
		} else {
			active = false;
		}
		ready = true;
	})

	let moveText = false;

	let focusHandle = () => {
		active = true;
	}

	let blurHandle = (e: Event) => {
		if(value) {
			active = true
		} else {
			active = false
		}
	}
</script>

<StyleHelper>
	<label {style}>
		<span class:active={active} class:inactive={!active} class:ready>{label}</span>
		<input
		{style}
		{name}
		{autocomplete}
		{required}
		{...{ type }}
		placeholder="{label}"
		class:doPlaceholder={!enableJS}
		bind:value={value}
		on:focus={focusHandle}
		on:blur={blurHandle}
		pattern="{pattern ? pattern.toString() : ""}"
	/>
	</label>
	
	
	
</StyleHelper>


<style>
	label {
		display: block;
		position: relative;
		height: 100%;
		cursor: text;
		color: var(--cui_borders);
		font-size: 1.2rem;
	}
	.active {
		display: none;
		height: 20px;
		position: absolute;
		top: -10px;
		left: 10px;
		align-items: center;
		justify-content: center;
		background: var(--cui_background);
		padding: 0px 5px;
		font-size: 0.8rem;
		color: var(--cui_text);
	}
	.inactive {
		display: none;
		height: 100%;
		position: absolute;
		align-items: center;
		justify-content: center;
		padding: 0px 5px;
		left: 6px;
		box-sizing: border-box;
		color: var(--cui_borders);
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
		text-align: left;
		border: 1px solid var(--cui_borders);
		color: var(--cui_text)
	}
	input:focus {
		border: 1px solid var(--cui_primary);
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}
	input::placeholder {
		position: fixed;
		display: none;
		color: transparent;
	}
	.doPlaceholder::placeholder {
		color: var(--cui_borders);
	}
	.ready {
		display: flex;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	}


	
	
</style>