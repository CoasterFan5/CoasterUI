<script>
	//this is NOT a form element
	//rather, its a div that styles a nice model form

	import StyleHelper from "../StyleHelper.svelte";
</script>

<StyleHelper>
	<div class="modelFormDiv">
		<slot/>
	</div>
</StyleHelper>


<style>
	.modelFormDiv {
		width: 100%;
		min-width: 400px;
		padding: 50px;
		box-sizing: border-box;
		background: var(--cui_background);
		border-radius: 3px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>