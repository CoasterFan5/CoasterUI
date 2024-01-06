<script lang="ts" context="module">
    type Option = {
        value?: string,
        display: string,
    }

    export type OptionList = Option[];
</script>

<script lang="ts">

    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
	import StyleHelper from "$lib/StyleHelper.svelte";
	import { onMount } from "svelte";
    export let name = "dropDown"
    export let label = "Select Option"
    export let value: string = "cui_default_option";

    export let style: string;

    export let options: OptionList;

</script>

<StyleHelper>
    <div class="wrap" {style}>
        
        <label>
            <span class="label">
                {label}
            </span>
            <span class="labelBG">
                {label}
            </span>
            <!--if we have js, we want a completely new element-->
            <select name={name} placeholder={label} {style} {value}>
                <option class="default" hidden value="cui_default_option">Select Option</option>
                {#each options as option, i}
                    <option value="{option.value || i}">{option.display}</option>
                {/each}
            </select>
        </label>

       
       
        <div class="arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" style="fill: var(--cui_text)">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
        </div>
    </div>
    
</StyleHelper>



<style>
    .wrap {
        position: relative;
    }
    .default {
        opacity: 0.5;
    }
    select {
        position: relative;
        color: var(--cui_text);
        cursor: pointer;
		background: transparent;
		border-radius: 3px;
		padding: 10px;
		box-sizing: border-box;
		font-size: 1.2rem;
		cursor: pointer;
		transition: background cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		text-decoration: none;
		width: 100%;
        text-align: left;
        outline: 0px;
        border: 1px solid var(--cui_borders);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        z-index: 2;
    }
    select:focus,
    select:active,
    select:hover {
        border: 1px solid var(--cui_primary);
    }
    .arrow {
        position: absolute;
        z-index: 1;
        height: 100%;
        aspect-ratio: 1/1;
        top: 0px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .arrow svg {
        padding-right: 5px;
    }
    .label {
        height: 20px;
		position: absolute;
        top: -10px;
		left: 10px;
        display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 5px;
		font-size: 0.8rem;
		color: var(--cui_text);
		opacity: 0.75;
		text-wrap: nowrap;
		z-index: 7;
    }
    .labelBG {
        height: 20px;
		position: absolute;
        top: -10px;
		left: 10px;
        display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 5px;
		font-size: 0.8rem;
		color: transparent;
        background: var(--cui_background);
		opacity: 1;
		text-wrap: nowrap;
		z-index: 6;

    }
    option {
        background: var(--cui_secondary);
        color: var(--cui_text);
        border-radius: 0px;
    }
    .eventOverride {
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
        outline: 0px;
        border: 0px;
        z-index: 5;
    }
    .eventOverride:focus,
    .eventOverride:active,
    .eventOverride:hover {
        border: 1px solid var(--cui_primary);
    }

    .fakeSelect {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 0px;
        top: 100%;
        width: 100%;
        height: fit-content;
        max-height: 200px;
        box-sizing: border-box;
        border: 1px solid var(--cui_primary);
    }
    .fakeSelect button {
        padding: 5px;
        box-sizing: border-box;
        text-align: left;
        background: var(--cui_secondary);
        color: var(--cui_text);
        font-size: 1.2rem;
        outline: 0px;
        border: 0px;
        cursor: pointer;
        z-index: 5;
        overflow-y: auto;
    }
    .fakeSelect button:hover {
        background: var(--cui_primary);
    }
</style>