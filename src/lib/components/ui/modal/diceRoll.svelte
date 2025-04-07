<script lang="ts">
    import Modal from "./modal.svelte";
    import { displayRoll, rollType, showRoll } from "$lib/rollStore";
    import { onDestroy } from "svelte";

    let {
        rollDice = () => {
            return "";
        },
    } = $props();

    let opacity = $state(0);
    let overAllOpacity = $state(1);
    function handleRoll() {
        setTimeout(() => {
            opacity = 1;
        }, 1000); // Delay for 1 second before showing the result
        setTimeout(() => {
            overAllOpacity = 0;
        }, 5000); // Delay for 1 second before showing the result
        return rollDice(); // Roll a d20
    }
    let showModal = $state(false);
    const  unsubscribe = showRoll.subscribe((value) => showModal = value)

    onDestroy(unsubscribe);

    // $effect(() => {
    //     setTimeout(() => {
    //         showModal = false;
    //     }, 5000);
    // });
</script>

{#if showModal}
    <Modal bind:showModal>
        <div class="relative w-24 h-24 opacity-0 animate-fade-in">
            <img
                class="w-auto h-auto object-cover animate-spin-once"
                src="/d20.jpg"
                alt="Dice Rolling"
            />
            <span
                class="absolute inset-0 flex opacity-{opacity} items-center justify-center text-black font-bold text-[28px] pt-6 animate-fade-in"
            >
                {handleRoll()}
            </span>
        </div>
    </Modal>
{/if}

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
        animation: spin-once 2s ease-in-out; /* Spins once over 1 second */
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
        animation: fade-in 1s ease-in-out 1s forwards; /* Fades in after 1 second */
    }
</style>
