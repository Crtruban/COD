<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { slide } from "svelte/transition";
	import { XCircleIcon } from "@lucide/svelte";
	let {
		npc = {
			img: "",
			name: "",
			hp: -1,
			ac: -1,
			movement: "-1 Ft.",
			actions: {},
			resistances: [],
			spells: [],
		},
		remove = () => {},
	} = $props();

	const defaultRemove = () => {};

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
</script>

<Card
	class="min-w-[850px] min-h-[800px] bg-scroll-parchment bg-cover bg-no-repeat shadow-lg rounded-lg border border-yellow-700"
>
		<div class="header flex justify-between items-center">
			<!-- Name and Index -->
			<div class="flex-grow text-center">
				<button onclick={() => (collapse = !collapse)}>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{npc.name}
					</h5>
				</button>
			</div>
		
			<!-- Remove Icon -->
			{#if remove !== defaultRemove}
				<XCircleIcon
					class="cursor-pointer text-red-500 hover:text-red-700 w-6 h-6 ml-auto"
					onclick={() => {
						// Remove the entity from the list
						remove();
					}}
				/>
			{/if}
		</div>
		{#if npc.img !== ""}
			<div class="flex justify-center bg-cover bg-no-repeat">
				<img
					src={npc.img}
					alt="Monster Pic"
					class="relative object-contain bg-white cursor-pointer w-48 h-48 rounded border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-150"
				/>
			</div>
		{/if}
		<span class="text-center flex items-center justify-center p-2">
			Health: {adjustableHealth} / {npc.hp} ({Math.floor(
				(adjustableHealth / npc.hp) * 100,
			)}%)
		</span>
		<div class="text-center">
			<div class="flex justify-center items-center gap-x-8">
				<!-- MAX HP -->
				<div class="flex flex-col items-center">
					<h6 class="text-lg font-semibold text-gray-900 dark:text-white">
						MAX HP
					</h6>
					<span class="font-normal text-gray-700 dark:text-gray-400">
						{npc.hp}
					</span>
				</div>
		
				<!-- AC -->
				<div class="flex flex-col items-center">
					<h6 class="text-lg font-semibold text-gray-900 dark:text-white">
						AC
					</h6>
					<span class="font-normal text-gray-700 dark:text-gray-400">
						{npc.ac}
					</span>
				</div>
			</div>
			
		</div>
</Card>
