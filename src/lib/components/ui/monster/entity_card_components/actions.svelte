<script lang="ts">
    import { Dice5, Sword } from "@lucide/svelte";
    import { displayRoll, showRoll, rollType, setRoll } from "$lib/rollStore";
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
    let fakeRolle = $state(20);
    function isEmptyOrUndefined(property:any) {
        return property === undefined || property === null || property === "";
    }
</script>

<!--HTML-->

<div class="text-center w-full">
    
    <h5
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
    >
        Actions
    </h5>
    <span class="flex-row pb-20">
        {#each Object.keys(npc.actions) as action_key}
        <div class="text-left w-full flex items-center justify-between">
            <span>
                {action_key.charAt(0).toUpperCase() + action_key.slice(1)}:
            </span>
            <div class="flex gap-4">
                <!-- Dice Icon with Label -->
                 {#if !isEmptyOrUndefined(npc.actions[action_key].attack)}
                <Button onclick={() => {
                    console.log(showRoll);
                    showRoll.set(true);
                    console.log(showRoll);

                }} class="flex items-center gap-1 fantasy-btn-sm bg-color-[white] fantasy-bone-n-coper transition-transform duration-300 ease-in-out hover:scale-150">
                   
                    <Dice5 class="w-5 h-5 text-white" />
                    <span class="text-sm text-white">
                        Attack
                    </span>
                </Button>
                {/if}
                <!-- Sword Icon with Label -->
                {#if !isEmptyOrUndefined(npc.actions[action_key].damage)}
                <Button class="flex items-center gap-1 fantasy-btn-sm bg-color-[white] fantasy-bone-n-coper transition-transform duration-300 ease-in-out hover:scale-150">
                    <Sword class="w-5 h-5 text-white" />
                    <span class="text-sm text-white">
                        Damage
                    </span>
                </Button>
                {/if}
            </div>
        </div>
            {#each Object.keys(npc.actions[action_key]) as action}
                <span class="text-[25px] font-bold tracking-tight text-gray-900 dark:text-white mb-2 text-left block pl-10">
                    <span class="justify-start text-left">
                        {action.charAt(0).toUpperCase() + action.slice(1)}:
                    </span>
                    <span class="font-normal text-[20px] text-left">
                        {npc.actions[action_key][action]}
                    </span>
                </span>
            {/each}
        {/each}
    </span>
</div>

