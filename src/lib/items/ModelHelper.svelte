<script lang="ts">
	import { fly } from "svelte/transition";
	import { linear, quintInOut } from 'svelte/easing';

	export let visible = false;

	let button: HTMLElement;

	const keyCheck = (e: KeyboardEvent) => {
		if(e.key == "Escape") {
			visible = false;
			
		}
	}

	const clickCheck = (e: MouseEvent) => {
		if(e.target == button) {
			visible = false;
		}
	}
</script>


<svelte:window on:keydown={keyCheck}/>
{#if visible}
	<button bind:this={button} class="wrap" on:mousedown={clickCheck}>
		<div class="slotWrap" transition:fly={{ duration: 250, y: 100, opacity: 0, easing: quintInOut }}>
			<slot/>
		</div>
		
	</button>
{/if}

<style>
	.wrap {
		all: unset;
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		top: 0px;
		left: 0px;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(3px);
		z-index: 100;
	}
</style>