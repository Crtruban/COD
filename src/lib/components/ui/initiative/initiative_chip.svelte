<script lang="ts">
    let { entity = { name: "", initiative: -1 } } = $props();
    let { name = "", initiative = -1 } = entity; // Destructure the entity object
</script>

<!-- HTML -->
<div class="flex pb-5 pl-5">
    <input
        value={initiative}
        disabled
        class="flex w-[15%] h-[50px] text-xl text-center bg-gray-200"
    />
    &nbsp; &nbsp;
    <input class="text-center bg-gray-200" value={name} disabled />
</div>

<style>
</style>
