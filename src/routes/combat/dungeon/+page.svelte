<script>
    import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
    import Monster from "$lib/components/ui/monster/monster.svelte";
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    let npcList = $state([
        mosnterList.rottingSpiderSwarm,
        mosnterList.rottingSpiderSwarm,
    ]);

    let selectedMonster = $state(null);
    let monsterOptions = Object.values(mosnterList);

    function addMonster() {
        if (selectedMonster) {
            npcList = [...npcList, selectedMonster];
            selectedMonster = null; // Reset the selected monster after adding
        }
    }
</script>

<!--HTML-->
<div style={"display: flexBox"}>
    <div class="flex justify-center">
        <Card
            class="scroll-card flex justify-right"
            style={"width:auto; height: auto"}
        >
                    <!-- Dropdown Menu -->
                    <div class="mb-4">
                        <select
                            bind:value={selectedMonster}
                            class="border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        >
                            <option value="" disabled selected
                                >Select a Monster</option
                            >
                            {#each monsterOptions as monster}
                                <option value={monster}>{monster.name}</option>
                            {/each}
                        </select>
                        <button
                            onclick={addMonster}
                            class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Monster
                        </button>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        {#each npcList as npc, index}
                            <div>
                                <button
                                    onclick={() =>
                                        (npcList = npcList.filter(
                                            (_, i) => i !== index,
                                        ))}>Remove Monster</button
                                >
                                <Monster {npc} {index} />
                            </div>
                        {/each}
                    </div>
              
        </Card>
    </div>
</div>

<style>
    .flex-wrap {
        flex-wrap: wrap;
    }
    .gap-4 {
        gap: 1rem; /* Adjust spacing between Monster components */
    }
</style>
