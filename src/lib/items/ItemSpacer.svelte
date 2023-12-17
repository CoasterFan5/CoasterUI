<script lang="ts">
	export let style: string = "";
</script>

<div style={style}>
	<slot/>
</div>

<style>
	div {
		padding: 7px 0px;
		width: 100%;
	}
</style>