<script lang="ts">
	import { Input, addToast } from '$lib';
	import { Button } from "$lib";
	import { ItemSpacer } from "$lib";
	import { ModelHelper } from "$lib"
	import { ModelFormDiv} from "$lib"
	import type { Toast } from '$lib/items/toaster';

	let visibleModel = false;

	
	const toastThing = () => {
		let types = [
			"info",
			"error",
			"warn",
			"success"
		]
		let colors = [
			"blue",
			"red",
			"yellow",
			"green"
		]

		let typeColor = Math.floor(Math.random() * types.length)

		if(Math.random() > 0.5) {
			addToast({
				title: types[typeColor],
				color: colors[typeColor],
				message: "This is a toast!",
			})
		} else {
			addToast({
				title: types[typeColor],
				color: colors[typeColor],
				message: "This is a toast!",
				life: Math.round(Math.random() * 7000) + 3000
			})
		}
		
	}

</script>

<ModelHelper bind:visible={visibleModel}>
	<form>
		<ModelFormDiv>
			<h1>Contact Me!</h1>
			<ItemSpacer>
				<Input label="First Name"/>
			</ItemSpacer>
			<ItemSpacer>
				<Input label="Last Name"/>
			</ItemSpacer>
			<ItemSpacer>
				<Input label="Email"/>
			</ItemSpacer>
			<ItemSpacer>
				<Button value="Submit" type="submit" on:click={() => {
					visibleModel = false;
				}}/>
			</ItemSpacer>
			
		</ModelFormDiv>
	</form>
</ModelHelper>


<div class="page">
	<ItemSpacer>
		<Input style="width: 250px"/>
	</ItemSpacer>
	<ItemSpacer>
		<Button style="width: 250px" value="Open Model" type="button" on:click={() => {
			visibleModel = true;
		}}/>
	</ItemSpacer>
	<ItemSpacer>
		<Button style="width: 250px" type="button" value="Show Toast" on:click={toastThing}/>
	</ItemSpacer>
	
</div>

<style>
	.page {
		width: 80%;
	}
</style>
