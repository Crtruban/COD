<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
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
        MapIcon,
    } from "@lucide/svelte/icons";
    import { Modal } from "flowbite-svelte";
    let clickOutsideModal = false;
    let placement: any;
    let open = false;
    let id: any;

    const setPlacement = () => {
        placement = "center"; // text in the button
        id = `center-modal`;
        open = !open;
    };

    let sections = [
        {
            title: "Dark Cavern",
            url: "darkCavern",
            icon: Mountain,
        },
        {
            title: "Glittering Cavern",
            url: "glitter",
            icon: Sparkle,
        },
        {
            title: "Dungeon",
            url: "dungeon",
            icon: Columns4,
        },
        {
            title: "Kraken Door",
            url: "krack",
            icon: FishSymbol,
        },
        {
            title: "Ghoul Dining Room / Blood Fountain",
            url: "ghoulRoom",
            icon: HandPlatter,
        },
        {
            title: "Ghoul Hall",
            url: "ghoulHall",
            icon: Bone,
        },
        {
            title: "Shield Hall",
            url: "shieldHall",
            icon: Shield,
        },
        {
            title: "Water Trap Chamber",
            url: "waterTrap",
            icon: Droplet,
        },
        {
            title: "Zaldara's Vault",
            url: "vault",
            icon: Trophy,
        },
    ];
    export { sections };
</script>

<Sidebar.Root>
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupLabel>Zaldara's Dungeon</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each sections as item (item.title)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton>
                                {#snippet child({ props })}
                                    <a href={item.url} {...props}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    {/each}
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
    </Sidebar.Content>
</Sidebar.Root>


<style>
    /* Ensure the sidebar does not overlap the nav bar */
    :global(.sidebar-root) {
      position: fixed;
      top: 60px; /* Adjust this to match the height of your nav bar */
      left: 0;
      width: 250px; /* Adjust the width as needed */
      height: calc(100% - 60px); /* Subtract the height of the nav bar */
      z-index: 1000; /* Ensure it stays below the nav bar if needed */
      background-color: #f8f9fa; /* Optional: Set a background color */
      overflow-y: auto; /* Enable scrolling if the content overflows */
    }
  
    /* Style for the nav bar */
    :global(.app-nav-bar) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px; /* Adjust the height as needed */
      z-index: 1100; /* Ensure it stays above the sidebar */
      background-color: #343a40; /* Optional: Set a background color */
      color: white;
      display: flex;
      align-items: center;
      padding: 0 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
    }
  
    /* Add padding to the main content to avoid being hidden behind the nav bar */
    :global(.main-content) {
      margin-top: 60px; /* Match the height of the nav bar */
      margin-left: 250px; /* Match the width of the sidebar */
      padding: 20px;
    }
  </style>