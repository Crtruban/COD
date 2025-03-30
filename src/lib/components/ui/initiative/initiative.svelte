<script lang="ts">
    import { Card } from "flowbite-svelte";
    import EntitySelector from "../monster/entity_selector.svelte";
    import InitiativeChip from "./initiative_chip.svelte";
    import { mosnterList } from "$lib/objects/monsterList/monsterList";
    import type { Entity } from "$lib/objects/monsterList/entity";

    let entityList: Entity[] = $state([
        {
            ...mosnterList.fleshGolem,
            id: crypto.randomUUID(),
            value: "Flesh Golem 1",
            initiative: 10,
        },
        {
            ...mosnterList.zaldara,
            id: crypto.randomUUID(),
            value: "Flesh Golem 2",
            initiative: 12,
        },
        {
            ...mosnterList.skeletonKnight,
            id: crypto.randomUUID(),
            value: "Flesh Golem 3",
            initiative: 8,
        },
    ]);

    const onChange = (newEntity: Entity) => {
        let newList = []
        console.table(entityList)
        entityList.map(x => newList.push(x));
        newList.push({...newEntity, id: crypto.randomUUID(), initiative: newInitiative});
        entityList = [...newList];
        newInitiative = 0;
        console.table(entityList)
    };

    let newInitiative: number = $state(0);

    // Function to move the last entry to the top
    const moveLastToTop = () => {
        let newList: any[] = [];
        entityList.map(x => newList.push(x));

        if(newList.length === 0) return; // Prevents error when list is empty
        const lastEntity = newList.pop(); // Remove the last element
        if (lastEntity) {
            newList.unshift(lastEntity); // Add it to the beginning
            entityList = [];
            entityList = newList; // Update the original list
        }
    };

    // Function to move the first entry to the bottom
    const moveFirstToBottom = () => {
        console.log("moveLastToTop", entityList);
        const firstEntity = entityList.shift(); // Remove the first element
        if (firstEntity) {
            entityList.push(firstEntity); // Add it to the end
        }
        console.log("moveLastToTop", entityList);
    };

    let mouseYCoordinate: any = null; // pointer y coordinate within client
    let distanceTopGrabbedVsPointer: any = null;

    let draggingItem: any = null;
    let draggingItemId: any = null;
    let draggingItemIndex: any = null;

    let hoveredItemIndex = null;

    // $effect: {
    //     // prevents the ghost flickering at the top
    //     if (mouseYCoordinate == null || mouseYCoordinate == 0) {
    //         // showGhost = false;
    //     }
    // }

    // $effect: {
    //     if (
    //         draggingItemIndex != null &&
    //         hoveredItemIndex != null &&
    //         draggingItemIndex != hoveredItemIndex
    //     ) {
    //         // swap items
    //         [entityList[draggingItemIndex], entityList[hoveredItemIndex]] = [
    //             entityList[hoveredItemIndex],
    //             entityList[draggingItemIndex],
    //         ];

    //         // balance
    //         draggingItemIndex = hoveredItemIndex;
    //     }
    // }

    let container = null;
</script>

<!-- HTML -->
<Card class="flexbox w-[450px] min-h-[50px]">
    <div class="p-[5%]">
        <span class="flex">
            <h2 class="font-bold flex justify-center">
                Initaive Tracker
            </h2>
            <button onclick={moveLastToTop}>Next</button>
            <!-- <button onclick={moveFirstToBottom}>Previous</button> -->
            </span
        >
        <span class="flex justify-right">
            <input
                class="flex w-[15%] h-[50px] text-xl text-center"
                value={newInitiative}
                onchange={(e: Event) => newInitiative = parseInt((e.target as HTMLInputElement)?.value || '0', 10)}
            />
            &nbsp; &nbsp;
            <EntitySelector {onChange} />
        </span>
    </div>
    <div bind:this={container}>
        {#if mouseYCoordinate}
            <div
                class="item ghost"
                style="top: {mouseYCoordinate +
                    distanceTopGrabbedVsPointer}px; background: {draggingItem.value};"
            >
                {draggingItem.value}
            </div>
        {/if}
        {#each entityList as entity: {name: "", initiaitve: -1, id: ""}, index}
        {#key entity.id}
            <span
                role="listitem"
                class="item {draggingItemId == entity.id ? 'invisible' : ''}"
                draggable="true"
                ondragstart={(e) => {
                    mouseYCoordinate = e.clientY;
                    //console.log('dragstart', mouseYCoordinate);

                    draggingItem = entity;
                    draggingItemIndex = index;
                    draggingItemId = entity.id;

                    distanceTopGrabbedVsPointer =
                        (e.target as HTMLElement).getBoundingClientRect().y -
                        e.clientY;
                }}
                ondrag={(e) => {
                    mouseYCoordinate = e.clientY;
                    //console.log('drag', mouseYCoordinate);
                }}
                ondragover={(e) => {
                    hoveredItemIndex = index;
                }}
                ondragend={(e) => {
                    //console.log('dragend', mouseYCoordinate);
                    //console.log('\n');

                    // mouseYCoordinate = e.clientY;

                    draggingItemId = null; // makes item visible
                    hoveredItemIndex = null; // prevents instant swap
                }}
            >
                <InitiativeChip {entity} />
            </span>
            {/key}
        {/each}
    </div>
</Card>

<style>
</style>
