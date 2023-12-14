<script>
	import { createStyleGuide } from "$lib"
</script>


<div class="wrap">
	<slot/>
</div>


<style>
	:global(body) {
		padding: 0px;
		margin: 0px;
		font-family: Optima, sans-serif;
	}
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50px;
		box-sizing: border-box;
	}
</style>