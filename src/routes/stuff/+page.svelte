<script lang="ts">
	import { Input, addToast } from '$lib';
	import { Button } from "$lib";
	import { ItemSpacer } from "$lib";
	import { ModelHelper } from "$lib"
	import { ModelFormDiv} from "$lib"
	import { DropDown, type OptionList }from '$lib';
	let visibleModel = false;


	const ddValues: OptionList = [
		{
			display: "Billing Help",
			value: "billing"
		},
		{
			display: "General Help",
			value: "general",
		},
		{
			display: "Server Help",
			value: "servers"
		},
	]

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
	<form method="get">
		<ModelFormDiv>
			<h1>Contact Me!</h1>
			<ItemSpacer>
				<Input label="First Name" regex={/^[a-z]*$/mg} autocomplete="off"/>
			</ItemSpacer>
			<ItemSpacer>
				<Input label="Last Name"/>
			</ItemSpacer>
			<ItemSpacer>
				<DropDown options={ddValues}/>
			</ItemSpacer>
			<ItemSpacer>
				<Button value="Submit" type="submit" variation="outline"/>
			</ItemSpacer>
			
		</ModelFormDiv>
	</form>
</ModelHelper>


<div class="page">
	<div class="components">
		<ItemSpacer>
			<Input/>
		</ItemSpacer>
		<ItemSpacer>
			<Button value="Open Model" type="button" on:click={() => {
				visibleModel = true;
			}}/>
		</ItemSpacer>
		<ItemSpacer>
			<DropDown options={ddValues}/>
		</ItemSpacer>
		<ItemSpacer>
			<Button type="button" value="Show Toast" variation="outline" on:click={toastThing}/>
		</ItemSpacer>
	</div>

	
</div>

<style>
	.page {
		width: 80%;
	}
	.components {
		max-width: 300px;
		box-sizing: border-box;
	}
</style>
