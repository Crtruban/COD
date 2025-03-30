<script lang="ts">
    import { Card } from "flowbite-svelte";
    import EntitySelector from "../monster/entity_selector.svelte";
    import InitiativeChip from "./initiative_chip.svelte";
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    import type { Entity } from "$lib/objects/monsterList/entity";
    import { ArrowDown, ArrowUp, XCircleIcon } from "@lucide/svelte/icons";
    import Button from "../button/button.svelte";

    let entityList: Entity[] = $state([mosnterList.fleshGolem]);

    const onChange = (newEntity: Entity) => {
        let newList = [];
        console.table(entityList);
        entityList.map((x) => newList.push(x));
        newList.push({
            ...newEntity,
            id: crypto.randomUUID(),
            initiative: newInitiative,
        });
        entityList = [...newList];
        newInitiative = null;
        console.table(entityList);
    };

    let newInitiative: any = $state();

    // Function to move the last entry to the top
    const moveFirstToBottom = () => {
        let newList: any[] = [];
        entityList.map((x) => newList.push(x));

        if (newList.length === 0) return; // Prevents error when list is empty
        const lastEntity = newList.pop(); // Remove the last element
        if (lastEntity) {
            newList.unshift(lastEntity); // Add it to the beginning
            entityList = [];
            entityList = newList; // Update the original list
        }
    };

    // Function to move the first entry to the bottom
    const moveLastToTop = () => {
        console.log("moveLastToTop", entityList);
        const firstEntity = entityList.shift(); // Remove the first element
        if (firstEntity) {
            entityList.push(firstEntity); // Add it to the end
        }
        console.log("moveLastToTop", entityList);
    };
</script>

<!-- HTML -->
<Card class="cursor-default grid grid-cols-4 gap-4 w-[550px] min-h-[50px]">
    <div class="col-span-4 p-[5%]">
        <!-- Header Div -->
        <h2 class="col-span-2 font-bold flex justify-center">
            Initiative Tracker
        </h2>
    </div>
    <div class="col-span-4 p-[5%] flex justify-center items-center">
        <!-- Header Div -->
        <Button
            onclick={() => {
                entityList = [...entityList].sort(
                    (a, b) => b.initiative - a.initiative,
                );
            }}
            class="font-bold">Sort Initiatives</Button
        >
    </div>
    <div class="col-span-4">
        <span class="flex justify-right pl-[6.5%] col-span-3">
            <input
            class="flex w-[15%] h-[50px] text-xl text-center"
            value={newInitiative}
            type="number"
            max="99"
            min="0"
            oninput={(e: Event) => {
                let inputElement = e.target as HTMLInputElement;
                if (inputElement.value.length > 2) {
                    inputElement.value = inputElement.value.slice(0, 2); // Limit to 2 digits
                }
                newInitiative = parseInt(inputElement.value || "0", 10);
            }}
            onchange={(e: Event) => {
                let newVal = parseInt((e.target as HTMLInputElement)?.value || "0", 10);
                if (-1 < newVal && newVal < 100) {
                    newInitiative = newVal;
                }
            }}
        />

            &nbsp; &nbsp;
            <EntitySelector {onChange} disabled={newInitiative==null} />
        </span>
    </div>
    <div class="flex">
        <!-- Left Section: Initiative Chips -->
        <div class="flex-1 ml-5">
            {#each entityList as entity: { name: "", initiative: -1, id: "" }, index}
                {#key entity.id}
                    <span
                        role="listitem"
                        class="flex item p-2 bg-gray-100 rounded-lg mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <InitiativeChip {entity} />
                        <XCircleIcon
                            class="cursor-pointer text-red-500 hover:text-red-700 w-6 h-6 ml-4"
                            onclick={() => {
                                // Remove the entity from the list
                                entityList = entityList.filter(
                                    (_, i) => i !== index,
                                );
                            }}
                        />
                    </span>
                {/key}
            {/each}
        </div>

        <!-- Right Section: Arrows -->
        {#if entityList.length > 0}
            <div
                class="flex flex-col items-center justify-start gap-4 ml-12 mt-10"
            >
                <ArrowUp
                    class="cursor-pointer w-16 h-16 text-gray-600 hover:text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out"
                    onclick={moveLastToTop}
                />
                <ArrowDown
                    class="cursor-pointer w-16 h-16 text-gray-600 hover:text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out"
                    onclick={moveFirstToBottom}
                />
            </div>
        {/if}
    </div>
</Card>

<style>
</style>
