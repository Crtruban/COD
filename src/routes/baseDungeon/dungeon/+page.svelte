<script lang="ts">
  import { Card } from "flowbite-svelte";
  let title = "Dungeon";
  let src = "/dungeon.png";
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
      <Card class=" scroll-card flex justify-right" style={"width:25%; height: 25%"}>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Read as players enter
        </h5>
        <p>
          Five iron doors line your path. Coming from one near the end of the
          hall, you hear terrible banging.
        </p>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span style="width: 30%;">
      <Card >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Notes for player activity
        </h5>
        <ul>
          <li>
            <span class="font-bold">Cell Doors</span> Each cell door has AC 19, 27
            hit points, and is immune to poison and psychic damage. Except for cell
            B, the doors are locked. A successful DC 15 Dexterity check with thieves’
            tools picks a door’s lock and a successful DC 20 Strength check forces
            a door open. Zaldara holds a master key to all the basement’s locked
            doors.
          </li>
        </ul>
      </Card>
    </span>
    <span style="width: 35%; padding-right: 10%;padding-left: 5%;">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>
            This is effectively a dead end. However players should try to free
            Elonast for assistance in the cellar.
          </li>
        </ul>
      </Card>
      <br />
      <br />
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Sewer Plague
        </h5>
        <ul>
          <li>
            It takes 1d4 days for sewer plague’s symptoms to manifest in an
            infected creature. Symptoms include fatigue and cramps. The infected
            creature suffers one level of exhaustion, and it regains only half
            the normal number of hit points from spending Hit Dice and no hit
            points from finishing a long rest. At the end of each long rest, an
            infected creature must make a DC 11 Constitution saving throw. On a
            failed save, the character gains one level of exhaustion. On a
            successful save, the character’s exhaustion level decreases by one
            level. If a successful saving throw reduces the infected creature’s
            level of exhaustion below 1, the creature recovers from the disease.
          </li>
        </ul>
      </Card>
    </span>
    <span style="width: 40%; padding-right: 10%;">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Cells
        </h5>
        <ul>
          <li>
            <span class="font-bold">A</span> Clean humanoid bones and purple crystals
            (see area Z12) litter the floor of this cell. A hungry swarm of insects
            (spiders) attacks any creature that enters this cell. Characters who
            take 10 CELLAR OF DEATH 8 minutes to search
          </li>
          <li>
            <span class="font-bold">B</span> The door to this cell is unlocked and
            it is the source of the banging. When a character moves by the door,
            it swings open, and the ten crawling claws inside advance and attack.
          </li>
          <li>
            <span class="font-bold">C</span> The rotting corpse of a male tiefling
            wearing ruined leather armor sits at the back of the cell, chained up
            and forgotten. The body wears a silver chain around its neck that bears
            a gold holy symbol of Asmodeus, ruler of the Nine Hells (50 gp). Any
            creature that touches the corpse must succeed on a DC 11 Constitution
            saving throw or contract the disease sewer plague (see the “Sewer Plague”
            sidebar).
          </li>
          <li>
            <span class="font-bold">D</span> This cell is empty, save for a set of
            manacles and bloodstains on the floor.
          </li>
          <li>
            <span class="font-bold">E</span> This cell contains Elonast, Zaldara’s
            old pseudodragon familiar and the source of the banging. Though the tiny
            monster no longer serves as her familiar, the lich cannot bring herself
            to kill or part with her old pet, so she keeps Elonast locked up here.
            Elonast hates what her old master has become and gladly helps the adventurers
            if they free her. She knows the layout of the basement well and is aware
            of all its traps and guardians.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>
