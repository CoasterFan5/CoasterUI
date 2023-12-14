<script lang="ts">
	// why a custom button?
	// keeps everything looking clean

	import StyleHelper from "../StyleHelper.svelte"
	export let style = "";

	export let value = 'Button!';
	export let type: 'submit' | 'reset' | 'button' | 'link' = 'submit';
	export let href = '';

	let button: HTMLElement;

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	const clickEventHandle = (e: MouseEvent) => {
		button.blur()
		dispatch("click", e)
	}

	
</script>

<StyleHelper>
	{#if type == 'submit' || type == 'reset' || type == 'button'}
		<button bind:this={button} {style} class="button" {type} on:click={clickEventHandle}>
			{value}
		</button>
	{:else if type == 'link'}
		<a bind:this={button} {style} class="button"  {href} on:click={clickEventHandle}>
			{value}
		</a>
	{/if}
</StyleHelper>


<style>
	.button {
		all: unset;
		cursor: pointer;
		background: transparent;
		border: 1px solid var(--cui_borders);
		border-radius: 3px;
		padding: 10px;
		box-sizing: border-box;
		font-size: 1.2rem;
		cursor: pointer;
		transition: background cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		text-decoration: none;
		color: var(--cui_text);
		background: var(--cui_background);
		text-align: center;
		width: 100%;
	}
	.button:focus,
	.button:hover,
	.button:active {
		border: 1px solid var(--cui_primary);
		background: var(--cui_primary);
		color: var(--cui_background);
	}
</style>