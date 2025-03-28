<script>
    import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
    import Monster from "$lib/components/ui/monster/monster.svelte";
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    let npcList = $state([
       mosnterList.skeletonSoldier,
       mosnterList.skeletonSoldier,
       mosnterList.skeletonMage
    ]);

    let selectedMonster = $state(null);
    let monsterOptions = Object.values(mosnterList);

    function addMonster() {
        if (selectedMonster) {
            console.log(npcList);
            npcList = [...npcList, selectedMonster]
            console.log(npcList);
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
            <Tabs class="tab-group" tabStyle="full">
                <Tab open class="tab-item h5" title="Z2">
                    <h5 class="tab-header">Skeleton Landing</h5>
                    <!-- Dropdown Menu -->
                    <div class="mb-4">
                        <select
                            bind:value={selectedMonster}
                            class="border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        >
                            <option value="" disabled selected>Select a Monster</option>
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
                       <div><button onclick={() => npcList = npcList.filter((_, i) => i !== index)}>Remove Monster</button> <Monster {npc} {index} /></div>
                    {/each}
                    </div>
                </Tab>
                <Tab class="tab-item" title="Z3">
                    <h5 class="tab-header">Z3: Glittering Ooze Lair</h5>
                    <Card class="scroll-card">
                        The sound of dripping water grows more rapid here. Drops
                        hit the ground so frequently, it’s almost as if the
                        stalactites are creating a light rain. In the north
                        wall, there’s an opening 10 feet above the ground big
                        enough for a crouched human.
                    </Card>
                    <p>
                        A <b>glittering ooze</b> disguised as a stalactite
                        clings to the ceiling, waiting for a character to walk
                        beneath it so it can attack. It's located on the very
                        northern edge of the area, 10 feet.
                        <br />
                        <b>Ceiling.</b> The ceiling is 15 feet high in this
                        area. Crawlspace. A successful DC 15 Strength
                        (Athletics) check is required to climb the wet wall to
                        get into the area where the gray ooze likes to feast on
                        its victims. There are half-dissolved bones scattered in
                        the space.
                        <br />
                        <b>Wet Floor.</b> Each time a creature moves more than
                        half its speed across the floor of this area, it must
                        succeed on a DC 10 Dexterity (Acrobatics) check or fall
                        prone.
                        <br />
                        <b>Treasure.</b> A character who searches through the bones
                        in the crawlspace finds a half-dissolved lead case that holds
                        10 +1 bolts.
                    </p>
                </Tab>
            </Tabs>
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
