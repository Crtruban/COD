<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Water Trap Chamber (Z11)";
  let src = "/waterTrap.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <img
        {src}
        alt="map"
        class="object-cover rounded-lg"
        style={"width:20%;"}
      />
      <Card
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <h5 class="tab-header">Water Trap Chamber</h5>
        <Card class="scroll-card">
          A strong mildew smell permeates this room. Green algae grows like moss
          from cracks in the walls, floor, and ceiling. A skeleton lies at the
          room’s center, its hand caught in a closed, steel trapdoor.
        </Card>
        <p>
          The players can interact with the trap if they'd like, or they can
          continue to the south into Zaldara's Vault(Z13)
        </p>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span class="justify-center centered-element" style="width: 30%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Room Explanation
        </h5>
        <ul>
          <li>
            This room is meant to kill intruders. When the trapdoor is opened,
            the skeleton comes to life and attacks the characters. Water Trap.
            When the trapdoor is opened, water erupts into the room through a
            grate that was covered by the trapdoor and the doors to this room
            immediately close and lock (see the “Zaldara’s Basement: General
            Features” sidebar). A successful DC 20 Strength check closes the
            trapdoor. When one of the doors to the room is opened, the trapdoor
            closes.
          </li>
        </ul>
      </Card>
    </span>
    <span class="justify-center centered-element" style="width: 30%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Trap Flow
        </h5>
        <ul>
          <li>
            On initiative count 20 if the trapdoor is open, 2 feet of water
            fills the room. A creature completely submerged in the water begins
            suffocating (see “Suffocating” in chapter 8, “Adventuring,” of the
            Player’s Handbook.)
          </li>
        </ul>
      </Card>
    </span>
    <span class="justify-center centered-element" style="width: 30%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Treasure
        </h5>
        <ul>
          <li>
            A DC 15 Wisdom (Perception) check notices the corners of a pouch
            held by the skeleton also caught under the trapdoor. If the trapdoor
            is lifted up and the skeleton is vanquished, this pouch can be
            recovered. It contains 100 gp.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>
