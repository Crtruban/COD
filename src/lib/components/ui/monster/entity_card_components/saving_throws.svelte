<script lang="ts">
    let {
        npc = {
            is_player: false,
            saving_throws: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            attributes: {
                strength: 12,
                dexterity: 14,
                constitution: 16,
                intelligence: 10,
                wisdom: 8,
                charisma: 6,
            },
            profficiency: 2,
            saving_throw_prof: {
                strength: false,
                dexterity: false,
                constitution: false,
                intelligence: false,
                wisdom: false,
                charisma: false,
            },
        },
    } = $props();

    function getSave(attr_key = "") {
        let { attributes, saving_throws, saving_throw_prof, is_player } = npc;
        if (attr_key == "") return;
        if (is_player) {
            if (saving_throw_prof[attr_key]) {
                console.log("Here");
                return (
                    Math.floor((attributes[attr_key] - 10) / 2) +
                    npc.profficiency
                );
            } else {
                console.log("Here");
                return Math.floor((attributes[attr_key] - 10) / 2);
            }
        }
        if (saving_throws[attr_key] > 0) {
            console.log("Here");
            return saving_throws[attr_key];
        } else {
            console.log("Here");
            return Math.floor(Math.floor((attributes[attr_key] - 10) / 2));
        }
    }
</script>

<!--HTML-->

<div class="text-center w-full">
    <h5
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
    >
        Saving Throws
    </h5>
    <span class="flex font-serif text-[75%] justify-center">
        {#each Object.entries(npc.saving_throws) as [key, value]}
            <span class="flex flex-col pr-5">
                <span class="flex-row">
                    {key.substring(0, 3).toUpperCase()}
                </span>
                <span class="flex-row">
                    {`${getSave(key) > 0 ? "+" : ""}${getSave(key)}`}
                </span>
            </span>
        {/each}
    </span>
</div>

<style>
</style>
