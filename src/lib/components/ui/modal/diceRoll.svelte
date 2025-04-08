<script lang="ts">
    import { Card } from "flowbite-svelte";
    import {  rollType, showRoll } from "$lib/rollStore";
    import { onDestroy } from "svelte";

    
    let rollDice = () => {};

    let opacity = $state(0);
    let overAllOpacity = $state(1);
    function handleRoll() {
        setTimeout(() => {
            opacity = 1;
        }, 1000); // Delay for 1 second before showing the result
        setTimeout(() => {
            overAllOpacity = 0;
        }, 2500); // Delay for 1 second before showing the result
        return rollDice(); // Roll a d20
    }

    $effect(() => {
        if (showModal) {
            console.log( handleRoll())
            dialog.showModal();
        }
    });

    let dialog = $state(); // HTMLDialogElement
    let showModal = $state(false);

    const unsubscribeRoll = rollType.subscribe((value) => (rollDice = value));
    const unsubscribe = showRoll.subscribe((value) => (showModal = value));

    onDestroy(unsubscribe);
    onDestroy(unsubscribeRoll);

    // $effect(() => {
    //     setTimeout(() => {
    //         showModal = false;
    //     }, 5000);
    // });
</script>

<dialog
    bind:this={dialog}
    onclose={() => (showModal = false)}
    onclick={(e) => {
        if (e.target === dialog) {
            opacity = 0;
            showRoll.set(false);
            dialog.close();
        }
    }}
>
    <div>
        <hr />
        {#if showModal}
        <Card class="border-double">
                <div
                    class="relative w-30 h-30 opacity-0 animate-fade-in overflow-hidden"
                >
                    <img
                        class="w-[90%] h-[90%] max-h-28 max-w-28 pl-2 object-cover animate-spin-once overflow-hidden"
                        src="/d20.jpg"
                        alt="Dice Rolling"
                    />
                    
                </div>
                <span
                class="overflow-hidden absolute inset-0 flex opacity-{opacity} items-center justify-center text-black font-bold text-[24px] pt-1 animate-fade-in-slow"
            >
                {handleRoll()}
            </span></Card>
        {/if}
        <hr />
        <!-- svelte-ignore a11y_autofocus -->
    </div>
</dialog>

<style>
    @keyframes spin-once {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(720deg);
        }
    }

    .animate-spin-once {
        animation: spin-once 1s ease-in-out; /* Spins once over 1 second */
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .animate-fade-in {
        animation: fade-in .5s ease-in-out .5s forwards; /* Fades in after 1 second */
    }
    .animate-fade-in-slow {
        animation: fade-in 1s ease-in-out 1s forwards; /* Fades in after 1 second */
    }
</style>
