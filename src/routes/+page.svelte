<script>
	import Button from "$lib/items/Button.svelte";
	import ItemSpacer from "$lib/items/ItemSpacer.svelte";

</script>
<div class="header">
	<h1>I made a UI library lol</h1>
	<p>This is in very rough shape rn</p>
	<ItemSpacer>
		<Button value="View Items" type="link" href="./stuff"/>
	</ItemSpacer>
	
</div>

<style>
	.header {
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>


