<script lang="ts">
  import { Card } from "flowbite-svelte";
  let title = "Dark Cavern";
  let src = "/darkCavern.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <img
        {src}
        alt="map"
        class="object-cover rounded-lg"
        style={"width:40%"}
      />
      <Card class="flex justify-right" style={"width:25%; height: 25%"}>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Read as players enter
        </h5>
        <p>
          Drip. Drip. Drip. That hollow sound pierces the silence in this cave
          as water slowly falls from stalactites. Stale air fills your lungs as
          you take in the cave. A large, unworked stone column holds up the
          ceiling. Stout stairs leading up hug the column’s one side while a
          5-foot high ledge that leads into darkness appears along the other.
          Further back, a second set of stairs leads up to a stone door carved
          with a skull.
        </p>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span style="width: 40%; padding-left:10%">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Notes for player activity
        </h5>
        <ul>
          <li>Any players without dark vision will not be able to see.</li>
          <li>
            If a player cretes a light source(Either through spells, or lighting
            a torch) they will see glimmering coming from the stairway on the
            south western side.
          </li>
          <br />
          <br />
          <li>
            <span class="font-bold">Skull Door</span>. The door that leads to area Z12 is locked and trapped. A
            detect magic spell reveals the door radiates an aura of necromancy
            magic. A successful DC 15 Intelligence (Arcana) check recognizes the
            trap for what it is and reveals how to disable it. The trap is
            triggered when a creature that is not undead touches the door, an
            attempt to pick the door’s lock fails, or the door is attacked. The
            skull’s eyes emit a line of necrotic energy that is 15 feet long and
            5 feet wide that shoots down the stairs. Each creature in the line
            must succeed on a DC 10 Constitution saving throw or gain one level
            of exhaustion. Creatures that fail this saving throw by 5 or more
            gain two levels of exhaustion. Scratching out both the skull’s eyes
            with a weapon or tool disables the trap.
          </li>
        </ul>
      </Card>
    </span>
    <span style="width: 40%; padding-right: 10%;">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>Going to the north with lead the players to the dungeon</li>
          <li>
            Going south west will lead players to the glittering cavern. Combat
            will start unless sneaking. If players cause a lot of commotion or
            take too long, the skeletons in the glittering cavern will
            investigate. Those with passive perception of 13 or higher will hear
            the skeletons approach.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>
