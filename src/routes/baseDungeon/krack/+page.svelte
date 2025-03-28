<script lang="ts">
  import { Card } from "flowbite-svelte";
  let title = "Kraken Door";
  let src = "/krakenDoor.png";
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
      <Card
        class=" scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Read as players enter
        </h5>
        <p>
          The large stone door before you is carved in the image of a kraken.
        </p>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span style="width: 30%;">
      <Card class="scroll-card">
        <ul>
          <li>
            This door is locked. A detect magic spell reveals the door radiates an aura of
            conjuration magic.<br/> A successful DC 15 Intelligence (Investigation)
            check finds a small arcane rune carved within the image of the
            kraken.<br/> A successful DC 15 Intelligence (Arcana) check reveals
            scratching out the rune with a weapon or tool disables the trap.
          </li>
        </ul>
      </Card>
    </span>
    <span style="width: 35%; padding-right: 10%;padding-left: 5%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>
            The kraken image and rune appear on both sides of the door. Only one
            rune needs to be scratched out to disable the trap. Or alternatively, 
            if a player has the key gem from Z4, having this in proximity will have the same effect.
             If neither are true, and the players approach initiate the trap. Once past the door, the players will head 
             to Z5.
          </li>
        </ul>
      </Card>
      <br />
      <br />
      
    </span>
    <span style="width: 40%; padding-right: 10%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Door Trap
        </h5>
        <ul>
          <li>
            The trap is triggered when a creature that is not
            undead that touches the door, an attempt to pick the
            door’s lock fails, or the door is attacked. Spectral
            tentacles shoot out of the door and grab for the
            creature triggered it. That creature must succeed on
            a DC 12 Dexterity saving throw or it is restrained by
            the tentacles. The tentacles can restrain up to five
            creatures at once.<br/>
            If the tentacles restrain a creature, that creature
            takes 3 (1d6) necrotic damage at the start of its turn
            as long as it is restrained in this way. The creature
            can repeat the saving throw at the end of its turns,
            ending the restrained condition on a success.<br/>
            If the tentacles restrain no creature or take radiant
            damage (AC 12, +2 to all saves), they disappear until
            the trap is triggered again.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>
