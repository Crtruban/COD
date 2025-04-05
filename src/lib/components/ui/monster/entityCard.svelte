<script lang="ts">
    import { Card } from "flowbite-svelte";
    import { slide } from "svelte/transition";
    import SavingThrows from "./entity_card_components/saving_throws.svelte";
    let {
        npc = {
            img: "",
            name: "",
            hp: -1,
            ac: -1,
            attributes: {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
            },
            movement: "-1 Ft.",
            actions: {},
            resistances: [],
            spells: [],
        },
        remove = () => {},
    } = $props();

    let hoverCss =
        "transition-transform duration-300 ease-in-out hover:scale-150";

    let collapse = $state(false);
    let spellCollapse = $state(false);

    let adjustableHealth = $state(npc.hp);

    let appliedDmgHL = $state(0);

    function applyDamage() {
        adjustableHealth = Math.max(0, adjustableHealth - appliedDmgHL);
    }

    function applyHeal() {
        adjustableHealth += appliedDmgHL;
    }
    function getMod(statValue = 10) {
        return Math.floor((statValue - 10) / 2);
    }
</script>

<Card
    class="cursor-default overflow-x-hidden min-w-[850px] min-h-[800px] bg-scroll-parchment bg-cover bg-no-repeat shadow-lg rounded-lg border border-yellow-700 p-6 flex flex-col gap-4"
>
    <div class="flex flex-row items-start w-full gap-6 justify-between">
        <!-- Primary Stats Section -->
        <div class="flex flex-col gap-4 items-start">
            <!-- Individual Stat -->
            {#each [{ label: "STR", value: npc.attributes.strength }, { label: "DEX", value: npc.attributes.dexterity }, { label: "CON", value: npc.attributes.constitution }, { label: "INT", value: npc.attributes.intelligence }, { label: "WIS", value: npc.attributes.wisdom }, { label: "CHA", value: npc.attributes.charisma }] as stat}
                <Card
                    class="flex flex-col items-center justify-center w-[70px] text-center {hoverCss}"
                >
                    <h6 class="text-lg font-bold text-gray-900 dark:text-white">
                        {stat.label}
                    </h6>
                    <span
                        class="text-2xl font-extrabold text-gray-900 dark:text-white"
                    >
                        {getMod(stat.value) > 0 ? "+" : ""}{getMod(stat.value)}
                    </span>
                    <span
                        style={"outline: 2px ridge; border-radius: 1rem;"}
                        class="flex items-center justify-center w-12 h-8 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white relative"
                    >
                        {stat.value}
                    </span>
                </Card>
            {/each}
        </div>

        <!-- Title and Health Section -->
        <div class="text-center w-full">
            <h5
                class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
            >
                {npc.name}
            </h5>
            <!-- Health Section -->
            <span class="flex pl-24 flex-row gap-4">
                {#each [{ label: "Health", value: npc.hp }, { label: "AC", value: npc.ac }, { label: "Movement", value: npc.movement }] as major}
                    <span
                        class="text-center flex items-center justify-center p-2"
                    >
                        <Card
                            class="flex flex-col items-center justify-center w-[70px] text-center w-20 h-35 {hoverCss}"
                        >
                            <h6
                                class="text-md font-bold text-gray-900 dark:text-white"
                            >
                                {major.label}
                            </h6>

                            <Card
                                class="flex items-center justify-center w-12 h-12 border-gray-900 dark:border-white text-gray-900 dark:text-white relative"
                            >
                                {major.value}
                            </Card>
                        </Card>
                    </span>
                {/each}
            </span>
            <span class="flex-row pb-20">
                <span class="dwindling-border rounded"></span>
                <div class="text-center w-full">
                    <h5
                        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
                    >
                        <SavingThrows />
                    </h5>
                </div>
            </span>
            <span>
                <span class="dwindling-border rounded"></span>
                <Card>
                    <h5
                        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
                    >
                        Actions NYI
                    </h5>
                </Card>
            </span>
            <span>
                <span class="dwindling-border rounded"></span>
                <Card>
                    <h5
                        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
                    >
                        Spells NYI
                    </h5>
                </Card>
            </span>
            <span>
                <span class="dwindling-border rounded"></span>
                <Card>
                    <h5
                        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
                    >
                        Traits/Features NYI
                    </h5>
                </Card>
            </span>
            <span>
                <span class="dwindling-border rounded"></span>
                <Card>
                    <h5
                        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
                    >
                        Resistances/Skills NYI
                    </h5>
                </Card>
            </span>
        </div>

        <!-- Image Section -->
        {#if npc.img !== ""}
            <div class="flex bg-cover bg-no-repeat ml-auto">
                <img
                    src={npc.img}
                    alt="Monster Pic"
                    class="relative hover:translate-x-[-25%] hover:translate-y-[25%] object-contain bg-white w-72 h-72 rounded border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-[190%]"
                />
            </div>
        {/if}
    </div>
</Card>

<style>
    .dwindling-border {
        display: block;
        height: 7px; /* Thickness of the border */
        width: 100%; /* Full width of the parent container */
        background: linear-gradient(
            to right,
            rgb(141, 2, 2),
            transparent
        ); /* Gradient from red to transparent */
        
    }
</style>
