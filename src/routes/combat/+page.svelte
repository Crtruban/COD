<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  import Monster from "$lib/components/ui/monster/monster.svelte";
  import Initiative from "$lib/components/ui/initiative/initiative.svelte";
  import Draggable from "$lib/components/ui/draggable/draggable.svelte";
  import { mosnterList } from "$lib/objects/monsterList/monsterList";
  import EntitySelector from "$lib/components/ui/monster/entity_selector.svelte";

  /**
   * @type {any[]}
   */
  let npcList: {
    id: string;
    value: string;
    name: string;
    initiative: number;
  }[] = $state([]);

  let selectedMonster = $state(null);
  let monsterOptions = Object.values(mosnterList);

  const newOnChange = (newEntity: any) => {
    let newList = [];
    let pushEntity = findEntityByName(mosnterList, newEntity.name);
    npcList.map((x) => newList.push(x));
    newList.push({
      ...pushEntity,
      id: crypto.randomUUID(),
    });
    npcList = [...newList];
    console.table(npcList);
  };

  function onChange() {
    if (selectedMonster) {
      console.log(npcList);
      npcList = [...npcList, selectedMonster];
      console.log(npcList);
      selectedMonster = null; // Reset the selected monster after adding
    }
  }

  function findEntityByName(
    obj: Record<string, any>,
    searchName: string,
  ): any | null {
    return (
      Object.values(obj).find(
        (value) =>
          value.name && value.name.toLowerCase() === searchName.toLowerCase(),
      ) || null
    );
  }
</script>

<!--HTML-->
<div style={"display: flexBox"}>
  <div class="flex justify-right">
    <Draggable>
      <Initiative />
    </Draggable>
  </div>
  <div class="flex justify-center">
    <Card
      class="scroll-card flex justify-right"
      style={"width:auto; height: auto"}
    >
      <!-- Dropdown Menu -->
      <div class="mb-4">
        <EntitySelector onChange={newOnChange} />
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
          onclick={onChange}
          class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Monster
        </button>
      </div>
      <div class="flex flex-wrap gap-4">
        {#each npcList as npc, index}
          <Draggable>
            {#key npc.id}
              <div>
                <button
                  onclick={() => {
                    npcList = npcList.filter((_, i) => i !== index);
                  }}
                >
                  Remove Monster</button
                >
                <Monster {npc} {index} />
              </div>
            {/key}</Draggable
          >
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
