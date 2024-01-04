<script lang="ts">
	import { createStyleGuide, type StyleGuide } from "$lib"
	import { Toaster, Button } from "$lib";

	type Theme = {
		text: string,
		background: string,
		primary: string,
		secondary: string,
		accent: string,
		styleGuide: StyleGuide
	}

	let themes: Theme[] = [
		{
			text: "#fcfcfc",
			background: "#1c1c1c",
			primary: "#005e8a",
			secondary: "#323232",
			accent: "#00475f",
			styleGuide: {
				background: "#1c1c1c",
				text: "#fcfcfc",
				primary: "#005e8a",
				secondary: "#323232",
				accent: "#00475f",
				borders: "#4d4c4c",
				button: {
					regular: {
						text: "#fcfcfc",
						textHover: "#fcfcfc",
					},
					outline: {
						text: "#fcfcfc",
						textHover: "#fcfcfc",
					}
				}
			}
		},
		{
			text: "#0e0e0e",
			background: "#f9f9f9",
			primary: "#3c00ff",
			secondary: "#e8e8e8",
			accent: "#00128a", 
			styleGuide: {
				background: "#f9f9f9",
				text: "#0e0e0e",
				primary: "#3c00ff",
				secondary: "#e8e8e8",
				accent: "#00128a",
			}
		}
	]


	let themeIndex = 0;

	let styleString: string;

	const toggleTheme = () => {
		if(themeIndex + 1 >= themes.length) {
			themeIndex = 0;
		} else {
			themeIndex++;
		}
		
		
		styleString = `--text: ${themes[themeIndex].text}; --background: ${themes[themeIndex].background}; --primary: ${themes[themeIndex].primary};--secondary: ${themes[themeIndex].secondary};--accent: ${themes[themeIndex].accent};`;
		createStyleGuide(themes[themeIndex].styleGuide);
		themes = [...themes];
		
		

		
	}
	toggleTheme()
</script>


<div class="wrap" style={styleString}>
	<div class="changeTheme" 
	>
		<Button value="Change Theme" on:click={toggleTheme}/>
	</div>
	<slot/>
	<Toaster/>
</div>


<style>
	:global(body) {
		padding: 0px;
		margin: 0px;
		font-family: Optima, sans-serif;

		

		
		
	}
	.changeTheme {
		position: fixed;
		top: 0px;
		right: 0px;
		z-index: 100;
	}	
	.wrap {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50px;
		box-sizing: border-box;
		background: var(--background);
		color: var(--text)
	}
</style>