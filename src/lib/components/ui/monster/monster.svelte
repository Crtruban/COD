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
		index = -1,
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
	class="max-w-[350px] min-h-[300px] bg-white dark:bg-gray-800 shadow-lg rounded-lg"
>
	<Card>
		<div class="header flex justify-between items-center">
			<!-- Name and Index -->
			<div class="flex-grow text-center">
				<button onclick={() => (collapse = !collapse)}>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{npc.name}
						{index + 1}
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
			<h6 class="text-lg font-semibold text-gray-900 dark:text-white">
				CURRENT HP
			</h6>
			<input
				type="number"
				bind:value={adjustableHealth}
				class="text-center border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
			/>
			<div class="flex justify-center gap-2 mt-2">
				<input
					type="number"
					bind:value={appliedDmgHL}
					class="text-center border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
				/>
				<button
					onclick={applyDamage}
					class="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
				>
					Damage
				</button>
				<button
					onclick={applyHeal}
					class="px-2 py-1 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
				>
					Heal
				</button>
			</div>
		</div>
	</Card>
</Card>
