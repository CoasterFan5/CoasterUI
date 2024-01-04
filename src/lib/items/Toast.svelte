<script lang="ts">
	import { fly } from 'svelte/transition';
	import { removeToast, type Toast } from './toaster';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import StyleHelper from '$lib/StyleHelper.svelte';

	export let data: Toast;
	let showTimer = false;

	let close = () => removeToast(data.id);

	if (data.life && data.life > 0) {
		setTimeout(() => close(), data.life);
	}

	onMount(() => {
		showTimer = true;
	});

	let typeTitles = {
		warn: 'Warning',
		error: 'Error',
		success: 'Success',
		info: "Info"
	};
</script>


<div
	style="z-index: {100000 - data.id ?? 0};"
	class="wrap"
	transition:fly={{ duration: 250, x: 500, opacity: 0.5, easing: quintInOut }}
>
	<StyleHelper>
	<div
		class="toast" style="border-left: 5px solid {data.color};"
	>
		<h3>{data.title}</h3>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p>{data.message}</p>
		<button class="close" on:click={close}>
			<svg width="24" height="24" viewBox="0 0 24 24" style="fill: var(--cui_text)">
				<path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
			</svg>
		</button>
		{#if showTimer}
			<div style="animation-duration: {data.life}ms;" class="timer" />
		{/if}
	</div>
</StyleHelper>
</div>


<style >
	.wrap {
		position: relative;
		z-index: 11;
		margin-top: 10px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
	}

	.toast {
		padding: 10px 30px;
		background: var(--cui_secondary);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		border-radius: 5px;
		width: 400px;
	}

	h3 {
		margin: 5px 0px;
	}

	p {
		margin: 0px;
	}

	.close {
		all: unset;
		cursor: pointer;
		font-size: 1.2rem;
		position: absolute;
		top: 0px;
		right: 0px;
		padding: 2px;
	}


	@keyframes closebar {
		from {
			width: 100%;
		}
		to {
			width: 0%;
		}
	}

	.timer {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 0%;
		height: 3px;
		background: var(--cui_text);
		animation-timing-function: linear;
		animation-name: closebar;
		opacity: 0.5;
	}
</style>