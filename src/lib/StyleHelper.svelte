<script lang="ts">
	import type { ButtonStyle, StyleGuide } from "./styler";
	import { styleSheet } from "./styler";
	
	
	let text = "#0e0e0e";
	let background = "#f9f9f9"
	let primary = "#3c00ff";
	let secondary = "#e8e8e8";
	let accent = "#00128a"
	let borders = "gray"
	export let button: ButtonStyle = {
		outline: {
			text: text,
			textHover: background
		},
		regular: {
			text: background,
			textHover: background
		}
	}

	
	styleSheet.subscribe((params) => {
		if(!params) {
			return;
		}
		text = params.text;
		background = params.background;
		primary = params.primary;
		secondary = params.secondary;
		accent = params.accent;
		if(params.borders) {
			borders = params.borders
		}
		if(params.button) {
			button = params.button
		} else {
			button = {
				outline: {
					text: params.text,
					textHover: params.background
				},
				regular: {
					text: params.background,
					textHover: params.background
				}
			}
		}
	})

	export let style: string = "";

	let styleString: string;
	$: styleString = `--cui_text: ${text}; --cui_background: ${background}; --cui_primary: ${primary}; --cui_secondary: ${secondary}; --cui_accent: ${accent}; --cui_borders: ${borders};`

</script>


{#key styleString}
	<div class='wrap' style="{styleString}{style}"
	>
		<slot/>
	</div>
{/key}

<style>
	.wrap {
		color: var(--cui_text);
	}
</style>
