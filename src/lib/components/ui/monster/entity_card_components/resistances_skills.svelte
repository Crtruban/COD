<script lang="ts">
    import { Dice5, Sword, ChevronDown, ChevronUp } from "@lucide/svelte";
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
} from 'svelte/transition';
    import { setDiceRoll } from "$lib/rollStore";
    import Button from "../../button/button.svelte";
    let {
        npc = {
            features: {},
        },
    } = $props();

    let collapse = $state(false);

    function isEmptyOrUndefined(property: any) {
        return property === undefined || property === null || property === "";
    }

    function getDamageFunction(damageString: string) {
        const damageRegex = /((\d+)d(\d+))([+-]?)(\d+)?/;
        const match = damageString.match(damageRegex);
        if (match) {
            const [
                fullMatch,
                dice,
                numberOfDice,
                diceType,
                operator,
                modifier,
            ] = match;
            return {
                numberOfDice: parseInt(numberOfDice),
                diceType: parseInt(diceType),
                modifier: (operator === "-" ? -1 : 1) * parseInt(modifier ? modifier : "0")
            }
        }
    }
</script>

<!--HTML-->

<div class="text-center w-full mw-[850px]">
    <span class="flex flex-row items-start w-full gap-6 justify-between">
        <h5
        class="flex items-center justify-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 w-full"
    >
        Traits / Features
    </h5>
        <span class="flex justify-end">
            <Button
                class="bg-inherit text-black hover:bg-[#520202] hover:text-white transition-colors duration-300 ease-in-out"
                onclick={() => (collapse = !collapse)}
            >
                <span
                    class="{collapse ? "collapsed" : "expanded"} transition-transform duration-300 ease-in-out">
                <ChevronDown /></span>
            </Button>
        </span>
    </span>
    {#if collapse}
    <div transition:slide={{ duration: 500 }} class="flex flex-col gap-2">
        <span transition:fade={{ duration: 1000 }} class="flex-row pb-20">
            {#if isEmptyOrUndefined(npc.features)}
            {#each Object.keys(npc.features) as feature_key}
                <div class="text-left w-full flex items-center justify-between">
                    <span>
                        {feature_key.charAt(0).toUpperCase() +
                            feature_key.slice(1)}:
                    </span>
                </div>
                
                {#each Object.keys(npc.features[feature_key]) as feature}
                    <span
                        class="text-[25px] font-bold tracking-tight text-gray-900 dark:text-white mb-2 text-left block pl-10"
                    >
                        <span class="justify-start text-left">
                            {feature.charAt(0).toUpperCase() + feature.slice(1)}:
                        </span>
                        <span class="font-normal text-[20px] text-left">
                         
                                {npc.actions[feature_key][feature]}
                        </span>
                    </span>
                {/each}
            {/each}
            {:else}
            <div class=" text-center text-base font-normal w-full flex items-center justify-center italic text-gray-900 dark:text-white">
                <span class="pt-[45px]">
                    No Features or Traits Found
                </span>
            </div>
        {/if}
        </span></div>
    {/if}
</div>
<style>
    .collapsed {
        transform: rotate(180deg);
    }
    .expanded {
        transform: rotate(0deg);
    }
</style>