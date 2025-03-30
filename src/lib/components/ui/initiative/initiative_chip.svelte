<script lang="ts">
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    let { entity = { name: "", initiative: -1 } } = $props();
    let { name = "", initiative = -1 } = entity; // Destructure the entity object
    function findEntityByName(obj: Record<string, any>, searchName: string): any | null {
        return Object.values(obj).find(
            (value) => value.name && value.name.toLowerCase() === searchName.toLowerCase()
        ) || null;
    }
    let foundEntity = findEntityByName(mosnterList, name)
    let image = foundEntity ? foundEntity.img : "";
</script>

<!-- HTML -->
<div class="col-span-3 flex items-center justify-center gap-4 pb-5 pl-8">
    <!-- Circle Image -->
    {#if image !== ""}
        <img
            src={image}
            alt={name ? `${name}'s image` : "Image of the entity"}
            class="w-20 h-20 rounded-full border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-150"
        />
    {/if}

    <!-- Initiative Input -->
    <span>
        <input
            value={initiative}
            class="max-w-[60px] h-[50px] text-xl text-center border border-gray-300 rounded-lg"
        />
    </span>

    <!-- Name Input -->
    <span>
        <input
            class="text-center min-h-[55px] border border-gray-300 rounded-lg px-2"
            value={name}
        />
    </span>
</div>

<style>
</style>
