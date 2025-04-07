<script lang="ts">
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    import entityCard from "../monster/entityCard.svelte";
    // import { Modal } from "flowbite-svelte";
    import { Modal } from "../modal";
    import Draggable from "../draggable/draggable.svelte";
    import EntityCard from "../monster/entityCard.svelte";

    // Destructs
    let { entity = { name: "", initiative: -1 }, initiativeChange = () => {} } = $props();
    let { name = "", initiative = -1 } = entity; // Destructure the entity object

    // Variables
    let foundEntity = findEntityByName(mosnterList, name);
    let image = foundEntity ? foundEntity.img : "";
    let showModal = $state(false);

    function updateInitiative(newValue: any) {
        // Update the entity's initiative
        initiativeChange(newValue);
    }

    //Functions
    function findEntityByName(
        obj: Record<string, any>,
        searchName: string,
    ): any | null {
        return (
            Object.values(obj).find(
                (value) =>
                    value.name &&
                    value.name.toLowerCase() === searchName.toLowerCase(),
            ) || null
        );
    }
</script>

<!-- HTML -->
<div class="col-span-3 flex items-center justify-center gap-4 pb-5 pl-8">
    <!-- Circle Image -->
    {#if image !== ""}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img
            onclick={() => {
                showModal = true;
            }}
            src={image}
            alt={name ? `${name}'s image` : "Image of the entity"}
            class="cursor-pointer w-20 h-20 rounded-full border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-150"
        />
    {/if}

    <!-- Initiative Input -->
    <span>
        <input
            value={entity.initiative}
            oninput={(e: Event) => {
                updateInitiative(parseInt(e.target.value))}}
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
{#if showModal}
<Draggable>
  

    <Modal bind:showModal>
        {#snippet header()}
            <h2>
                {name}
            </h2>
        {/snippet}
        <EntityCard npc={foundEntity}/>
        <!-- <img
            src={image}
            alt={name ? `${name}'s image` : "Image of the entity"}
               /> -->
    </Modal>

</Draggable>
{/if}
<style>
    /* Custom parchment scroll background */
    .bg-scroll-parchment {
        background-image: url("/parchment-texture.jpg"); /* Replace with your parchment texture image */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #f5deb3; /* Fallback solid color for parchment */
        opacity: 1; /* Ensure no transparency */
    }
</style>
