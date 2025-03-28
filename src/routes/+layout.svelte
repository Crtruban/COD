<script lang="ts">
    import "../app.css";
    import {
        Columns4,
        Mountain,
        Trophy,
        FishSymbol,
        HandPlatter,
        Bone,
        Shield,
        Droplet,
        Sparkle,
    } from "@lucide/svelte/icons";

    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import { Divide, MapIcon } from "@lucide/svelte/icons";
    import {
        Modal,
        Button,
        Dropdown,
        DropdownItem,
        DropdownDivider,
        DropdownHeader,
    } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";
    import { mount } from "svelte";
    let clickOutsideModal = $state(false);

    let mapHtml =
        '<img class="mapModal" alt="Zaldara\'s Dungeon Map" src={"/map.png"} />';
    let showDropdown = $state(false); // State to toggle dropdown visibility

    let sections = [
        {
            title: "Dark Cavern (Z1)",
            url: "darkCavern",
            icon: Mountain,
        },
        {
            title: "Glittering Cavern (Z2, Z3, Z4)",
            url: "glitter",
            icon: Sparkle,
        },
        {
            title: "Dungeon (Z12)",
            url: "dungeon",
            icon: Columns4,
        },
        {
            title: "Kraken Door",
            url: "krack",
            icon: FishSymbol,
        },
        {
            title: "Ghoul Dining Room / Blood Fountain (Z5, Z6, Z7)",
            url: "ghoulRoom",
            icon: HandPlatter,
        },
        {
            title: "Ghoul Hall (Z8, Z9)",
            url: "ghoulHall",
            icon: Bone,
        },
        {
            title: "Shield Hall (Z10)",
            url: "shieldHall",
            icon: Shield,
        },
        {
            title: "Water Trap Chamber (Z11)",
            url: "waterTrap",
            icon: Droplet,
        },
        {
            title: "Zaldara's Vault (Z13)",
            url: "vault",
            icon: Trophy,
        },
    ];

    let { children } = $props();
    let chapters = [
        {
            title: "Home",
            url: "",
        },
        {
            title: "Introduction",
            url: "intro",
        },
        {
            title: "Combat Encounters",
            url: "combat",
        },
    ];
</script>

<nav class="navBar">
    {#each chapters as chapter, index}
        <a class="drop-down-hover" href="/{chapter.url}">{chapter.title}</a>
    {/each}
    <span class="drop-down-hover" 
        >Zaldara's Dungeon<ChevronDownOutline
            class="w-6 h-6 ms-2 text-black dark:text-white"
        /></span
    >
    <Dropdown bind:open={showDropdown} class="dropdown">
        {#each sections as section}
            <DropdownItem href="/baseDungeon/{section.url}" on:click={() => (showDropdown = false)} >
                <section.icon class="w-6 h-6" />
                {section.title}
            </DropdownItem>
        {/each}
    </Dropdown>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_missing_attribute -->
    <a
        type="button"
        class="drop-down-hover"
        aria-label="Open Dungeon Map"
        onclick={() => {
            clickOutsideModal = true;
        }}
    >
        <MapIcon style={"color: black"} />
        <span>Dungeon Map</span>
    </a>
</nav>

<Modal
    title="Map"
    bind:open={clickOutsideModal}
    autoclose
    outsideclose
    placement="center"
    style={"width:40%; position: absolute;top: 80px;right: 0;border: 3px solid;"}
>
    <img class="mapModal" alt="Zaldara's Dungeon Map" src={"/map.png"} />
</Modal>
{@render children()}

<style>
    a:hover{
        color: white; /* Text color */
        text-shadow:
            -1px -1px 0 #000,
            /* Top-left shadow */ 1px -1px 0 #000,
            /* Top-right shadow */ -1px 1px 0 #000,
            /* Bottom-left shadow */ 1px 1px 0 #000; /* Bottom-right shadow */
    }
    .navBar {
        background: #fdf5e6; /* Light parchment color */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
        font-family: "Papyrus", "Cursive", serif; /* Fantasy-style font */
        color: #4b2e2e; /* Dark brown text color */
        background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(0, 0, 0, 0.1) 100%
        );
        background-size: cover; /* Subtle texture for the parchment */
        font-weight: bold; /* Make the text bold for better visibility */
        color: white; /* Text color */
        text-shadow:
            -1px -1px 0 #000,
            /* Top-left shadow */ 1px -1px 0 #000,
            /* Top-right shadow */ -1px 1px 0 #000,
            /* Bottom-left shadow */ 1px 1px 0 #000; /* Bottom-right shadow */
    }
    .mapModal {
        opacity: 0.5;
        transition: opacity 0.5s ease-out;
        -moz-transition: opacity 0.5s ease-out;
        -webkit-transition: opacity 0.5s ease-out;
        -o-transition: opacity 0.5s ease-out;
    }
    .mapModal:hover {
        opacity: 1;
    }

    .drop-down-hover {
        cursor: pointer; /* Change the cursor to indicate it's clickable */
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px; /* Optional: Add rounded corners */
        transition:
            background-color 0.3s ease,
            color 0.3s ease; /* Smooth transition */

    }

    .drop-down-hover:hover {
        background-color: #c7a870; /* Light gray background on hover */
    }

    :global(.dropdown) {
        position: absolute;
        width: 200px; /* Adjust the width as needed */
        top: 100%;
        left: 0;
        background: #c7a870; /* Light parchment color */
        border: 2px solid #8b4513; /* Dark brown border for an aged look */
        border-radius: 15px; /* Rounded edges to mimic a scroll */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
        padding: 20px; /* Add spacing inside the card */
        font-family: "Papyrus", "Cursive", serif; /* Fantasy-style font */
        background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(0, 0, 0, 0.1) 100%
        );
        background-size: cover; /* Subtle texture for the parchment */
    }

</style>
