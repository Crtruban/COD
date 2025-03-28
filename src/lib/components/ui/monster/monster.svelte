<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { slide } from "svelte/transition";
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
	} = $props();

	let collapse = $state(false);
	let spellCollapse = $state(false)

	let adjustableHealth = $state(npc.hp);

	let appliedDmgHL = $state(0);

	function applyDamage() {
		adjustableHealth = Math.max(0, adjustableHealth - appliedDmgHL);
	}

	function applyHeal() {
		adjustableHealth += appliedDmgHL;
	}
</script>

<Card>
	<Card >
		<button onclick={() => (collapse = !collapse)}>
		<h5
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
		>
			{npc.name}
			{index + 1}
		</h5></button>
		{#if npc.img !== ""}
			<div class="flex justify-center">
				<img
					src={npc.img}
					alt="Monster Pic"
					class="object-cover rounded-lg h-48 w-48"
									/>
			</div>
		{/if}
		<span>
			Health: {adjustableHealth} / {npc.hp} ({Math.floor(
				(adjustableHealth / npc.hp) * 100,
			)}%)
		</span>
	</Card>
	<br />
	{#if collapse}
		<span transition:slide={{ duration: 400 }}>
			<div class="grid grid-cols-3 gap-4">
				<div class="text-center">
					<h6
						class="text-lg font-semibold text-gray-900 dark:text-white"
					>
						HP
					</h6>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						{npc.hp}
					</p>
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
				<div class="text-center">
					<h6
						class="text-lg font-semibold text-gray-900 dark:text-white"
					>
						AC
					</h6>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						{npc.ac}
					</p>
				</div>
				<div class="text-center">
					<h6
						class="text-lg font-semibold text-gray-900 dark:text-white"
					>
						Movement
					</h6>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						{npc.movement}
					</p>
				</div>
			</div>
			<div>
				<h6 class="text-lg font-semibold text-gray-900 dark:text-white">
					Actions
				</h6>
				<ul
					class="list-disc list-inside text-gray-700 dark:text-gray-400"
				>
					{#if npc.actions}
						{#each Object.entries(npc.actions) as [name, action]}
							{#if action}
								<Card>
									<b>{name}:</b>
									<ul>
										{#each Object.entries(action) as [name, actionProp]}
											<p>
												{name?.toUpperCase()}
												{actionProp}
											</p>
										{/each}
									</ul>
								</Card>
							{/if}
						{/each}
						{#if npc.spells}
							<Card ><button onclick={() => (spellCollapse = !spellCollapse)}>Spell List</button>
								{#if spellCollapse}
								{#each npc.spells as spell}
									<Card
										>{spell.name.toUpperCase()}
										{console.log(spell)}
										{#each Object.entries(spell) as [name, spellProp]}
											{#if name == "damage"}
												<b>{name?.toUpperCase()}:</b><Card>
												{#each Object.entries(spellProp as {}) as [name, damageProp]}
												
													{name?.toUpperCase()}:
													{damageProp}
												
												{/each}</Card>
											{/if}
											{#if name != "name" && name != "damage"}
												<b>{name?.toUpperCase()}:</b>
												{spellProp}
											{/if}
										{/each}</Card
									>
								{/each}
								{/if}
							</Card>
							{/if}
					{/if}
				</ul>
			</div>
			<p class="font-normal text-gray-700 dark:text-gray-400">
				This is a monster card. It can be used to display monster
				information.
			</p>
		</span>
	{/if}
</Card>
