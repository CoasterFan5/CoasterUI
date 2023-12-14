<script lang="ts" context="module">
	let text = "#0e0e0e";
	let background = "#f9f9f9"
	let primary = "#3c00ff";
	let secondary = "#e8e8e8";
	let accent = "#00128a"
	let borders = "gray"

	type StyleGuide = {
		text: string,
		background: string,
		primary: string,
		secondary: string,
		accent: string,
		borders?: string,
	}

	export let createStyleGuide = (params: StyleGuide) => {
		text = params.text;
		background = params.background;
		primary = params.primary;
		secondary = params.secondary;
		accent = params.accent;
		if(params.borders) {
			borders = params.borders
		}
	}
</script>

<div class='wrap' style="--cui_text: {text}; --cui_background: {background}; --cui_primary: {primary}; --cui_secondary: {secondary}; --cui_accent: {accent}; --cui_borders: {borders}">
	<slot/>
</div>
