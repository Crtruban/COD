<script lang="ts">
    import { mosnterList } from "$lib/objects/monsterList/monsterList";

    let customEntityName = $state("");
    let monsterOptions = Object.values(mosnterList);
    let { onChange = () => {}, disabled = false} = $props();
    const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
</script>

<div class="flex mb-4">
    <input
        list="monster-options"
        bind:value={customEntityName}
        class="border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        placeholder="Select or enter a monster"
    />
    <datalist id="monster-options">
        {#each monsterOptions as monster}
            <option value={monster.name} onclick={() => {
                customEntityName = monster.name;
            }}></option>
        {/each}
    </datalist>
    <button
        disabled={!(!!(customEntityName)) || disabled}
        onclick={() => {
            let selectedEntity =  { name: customEntityName, id: crypto.randomUUID()}
            onChange(selectedEntity);
            customEntityName = ""
        }}
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
        Add Entity
    </button>
</div>
