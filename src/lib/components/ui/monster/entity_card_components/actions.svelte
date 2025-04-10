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
            is_player: false,

            attributes: {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
            },
            profficiency: 2,
            actions: {},
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
        Actions
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
            {#each Object.keys(npc.actions) as action_key}
                <div class="text-left w-full flex items-center justify-between">
                    <span>
                        {action_key.charAt(0).toUpperCase() +
                            action_key.slice(1)}:
                    </span>
                    <div class="flex gap-4">
                        <!-- Dice Icon with Label -->
                        {#if !isEmptyOrUndefined(npc.actions[action_key].attack)}
                            <Button
                                onclick={() => {
                                    setDiceRoll(1, 20, npc.actions[action_key].attack  || 0);
                                }}
                                class="flex items-center gap-1 fantasy-btn-sm bg-color-[white] fantasy-bone-n-coper transition-transform duration-300 ease-in-out hover:scale-150"
                            >
                                <Dice5 class="w-5 h-5 text-white" />
                                <span class="text-sm text-white"> Attack </span>
                            </Button>
                        {/if}
                        <!-- Sword Icon with Label -->
                        {#if !isEmptyOrUndefined(npc.actions[action_key].damage)}
                            <Button
                                onclick={() => {
                                    const dmgRolls = getDamageFunction(
                                        npc.actions[action_key].damage,
                                    );
                                    if (dmgRolls) {
                                        let { numberOfDice, diceType, modifier } = dmgRolls;
                                        setDiceRoll(numberOfDice, diceType, modifier || 0);
                                    }
                                }}
                                class="flex items-center gap-1 fantasy-btn-sm bg-color-[white] fantasy-bone-n-coper transition-transform duration-300 ease-in-out hover:scale-150"
                            >
                                <Sword class="w-5 h-5 text-white" />
                                <span class="text-sm text-white"> Damage </span>
                            </Button>
                        {/if}
                    </div>
                </div>
                {#each Object.keys(npc.actions[action_key]) as action}
                    <span
                        class="text-[25px] font-bold tracking-tight text-gray-900 dark:text-white mb-2 text-left block pl-10"
                    >
                        <span class="justify-start text-left">
                            {action.charAt(0).toUpperCase() + action.slice(1)}:
                        </span>
                        <span class="font-normal text-[20px] text-left">
                            {#if action == "attack"}
                                {npc.actions[action_key][action] > 0
                                    ? `+${npc.actions[action_key][action]}`
                                    : npc.actions[action_key][action]}
                            {:else}
                                {npc.actions[action_key][action]}
                            {/if}
                        </span>
                    </span>
                {/each}
            {/each}
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