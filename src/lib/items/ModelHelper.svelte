<script lang="ts">
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
		<slot/>
	</button>
{/if}

<style>
	.wrap {
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