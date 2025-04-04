<script lang="ts">
    import type { Entity } from "$lib/objects/monsterList/entity";
    import { mosnterList } from "$lib/objects/monsterList/monsterList";

    let customEntityName = $state("");
    let predefinedEntity:any = $state({})
    let monsterOptions = Object.values(mosnterList);
    let { onChange = () => {}, disabled = false} = $props();
    function findEntityByName(
    obj: Record<string, any>,
    searchName: string,
  ): any | null {
    console.log('Here');
    return (
      Object.values(obj).find(
        (value) =>
          value.name && value.name.toLowerCase() === searchName.toLowerCase(),
      ) || null
    );
  }
    const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
</script>

<div class="flex mb-4">
    <input
        list="monster-options"
        bind:value={predefinedEntity.name}
        onchange={() => {
            predefinedEntity = findEntityByName(mosnterList, predefinedEntity.name);
        }}
        class="border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        placeholder="Select or enter a monster"
    />
    <datalist id="monster-options">
        {#each monsterOptions as monster}
            <option value={monster.name} onclick={() => {
                customEntityName = monster.name;
                predefinedEntity = findEntityByName(mosnterList, monster.name)
            }}></option>
        {/each}
    </datalist>
    <button
        disabled={(!!(Object.keys(predefinedEntity).length === 0 && predefinedEntity.constructor === Object)) || disabled}
        onclick={() => {
            let selectedEntity =  { ...predefinedEntity, id: crypto.randomUUID()}
            onChange(selectedEntity);
        }}
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
        Add Entity
    </button>
</div>
