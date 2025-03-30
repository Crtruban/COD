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
      <div class="mb-4 min-w-[400px]">
        <h1 class="pt-5 text-center font-bold text-xl">
          Add an Entity to Combat
        </h1>
        <div class="flex justify-center">
          <EntitySelector onChange={newOnChange} />
        </div>
      </div>
      <div class="flex flex-wrap gap-4 justify-center p-4">
        {#each npcList as npc, index}
          {#key npc.id}
            <div>
              <!-- <XCircleIcon
                class="cursor-pointer justify-right text-red-500 hover:text-red-700 w-6 h-6 ml-4"
                onclick={() => {
                  // Remove the entity from the list
                  npcList = npcList.filter((_, i) => i !== index);
                }}
              /> -->

              <Monster {npc} {index} remove={() => {
                npcList = npcList.filter((_, i) => i !== index);
              }} />
            </div>
          {/key}
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
