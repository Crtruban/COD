<script lang="ts">
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    let { entity = { name: "", initiative: -1 } } = $props();
    let { name = "", initiative = -1 } = entity; // Destructure the entity object
    function containsValue(obj: Record<string, any>, searchValue: string): boolean {
    return Object.values(obj).some((value) =>
        typeof value === "string" && value.toLowerCase().includes(searchValue.toLowerCase())
    );
}
    let image = "";
</script>

<!-- HTML -->
<div class="col-span-3 justify-right flex pb-5 pl-8">
    <span>
        <input
            value={initiative}
            class="col-span-1 max-w-[60px] h-[50px] text-xl text-center"
        />
    </span>
    <span class="h-auto pl-4">
        <input class="col-span-1 text-center min-h-[55px]" value={name} /></span
    >
    <!-- Circle Image -->
    {#if image !== ""}
        <img
            src={image}
            alt={name ? `${name}'s image` : "Image of the entity"}
            class="w-10 h-10 rounded-full mr-4 border border-gray-300"
        />
    {/if}
</div>

<style>
</style>
