<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
   
    let { children } = $props();
  </script>
   

      {@render children?.()}
      <style>
       :global(h1) {
            padding-left: 20px
        }
        :global(.tab-group > .tab-item *) {
          font-weight: bold; /* Make the text bold for better visibility */
        color: white; /* Text color */
        text-shadow:
            -1px -1px 0 #000,
            /* Top-left shadow */ 1px -1px 0 #000,
            /* Top-right shadow */ -1px 1px 0 #000,
            /* Bottom-left shadow */ 1px 1px 0 #000; 
        }

        :global(.tab-group > .tab-item *):hover{
          background-color: #c7a870; 
        }

        :global(.tab-group) {
    width: 100%;
  }

  :global(.tab-item) {
    flex: 1; /* Make each tab header take equal space */
    text-align: center; /* Center-align the text */
  }

  /* Scroll container styling */
  :global(.scroll-card) {
    background: #fdf5e6; /* Light parchment color */
    border: 2px solid #8b4513; /* Dark brown border for an aged look */
    border-radius: 15px; /* Rounded edges to mimic a scroll */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    padding: 20px; /* Add spacing inside the card */
    font-family: "Papyrus", "Cursive", serif; /* Fantasy-style font */
    color: #4b2e2e; /* Dark brown text color */
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    background-size: cover; /* Subtle texture for the parchment */
  }

  /* Add a decorative border effect */
  :global(.scroll-card::before),
  :global(.scroll-card::after) {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* border: 2px solid #8b4513; */
    border-radius: 15px;
    top: 5px;
    left: 5px;
    z-index: -1;
    opacity: 0.5;
  }

  /* Add a curled edge effect */
  :global(.scroll-card::after) {
    top: -5px;
    left: -5px;
  }

  /* Optional: Style headings for a fantasy look */
  :global(.scroll-card h5) {
    font-family: "Uncial Antiqua", serif; /* Fantasy-style font for headings */
    font-size: 1.5rem;
    text-align: center;
    color: #8b4513; /* Darker brown for headings */
    margin-bottom: 10px;
  }

  /* Optional: Style list items for better readability */
  :global(.scroll-card ul) {
    list-style-type: none;
    padding-left: 20px;
  }

  :global(.scroll-card li) {
    margin-bottom: 10px;
  }
        </style>