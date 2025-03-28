<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Ghoul Dining Room / Blood Fountain (Z5, Z6, Z7)";
  let src = "/dinningRoom.png";
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
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <Tabs class="tab-group" tabStyle="full">
          <Tab open class="tab-item h5" title="Z5">
            <h5 class="tab-header">Hallway: Read as the Kraken Door Opens</h5>
            <Card class="scroll-card">
              The ancient dungeon door rumbles as it slowly opens, the engraved
              kraken’s tentacles seeming to writhe with eerie life. The magical
              aura surrounding it flares in vibrant blue and purple, casting
              ghostly shadows along the damp cave walls. A deep, resonant creak
              echoes through the cavern as the widening gap reveals a dark
              chamber beyond, a rotting smell emenates from the chambers in
              front of you.
            </Card>
            <br /><br />
            As players enter they'll see the doors leading to the other rooms. These
            halls have various sconces with lit torches illuminating the halls eliminating
            the need of dark vision and light sources of their own.
          </Tab>
          <Tab class="tab-item" title="Z6">
            <h5 class="tab-header">Z6: Ghoul Dining Room</h5>
            <Card class="scroll-card">
              The nauseating stench of this room makes your stomach do
              backflips. Blood is sprayed across the walls and coats the floor.
              Bones are piled high in the back corner of the room and pieces of
              humanoid bodies are everywhere. The source of this mutilation
              becomes clear as a purple-skinned undead with long claws gnaws on
              the arm of a halfling. The horrid creature smiles a gore-coated
              grin at your arrival.
            </Card>
            <br />
            <p>
              Zaldara keeps a small ghoul pack fed in exchange for them
              defending her basement. One ghoul is here when the characters
              arrive, stuffing its face. When it sees the characters, it
              attacks.
              <br /><b> Cursed Blood.</b> The blood covering the floor of this
              room is cursed by Zaldara’s magic. Any creature that is not undead
              that touches the floor has disadvantage on Constitution saving
              throws.<br />
              <b>Treasure.</b> A DC 15 Intelligence (Investigation) check uncovers
              a small bag with 25 gp in the blood.
            </p>
          </Tab>
          <Tab class="tab-item" title="Z7">
            <h5 class="tab-header">Z7: Blood Fountain</h5>
            <Card class="scroll-card">
              A copper taste fills your mouth as you come into this room filled
              with fine red mist. At the center of the chamber, a blood-soaked
              statue of a horned and winged demon vomits a fountain of blood
              into the air, gathering in a bubbling pool around his legs
            </Card>
            <p>
              The ghouls take baths in the blood fountain. <br />
              <b>Blood Fountain</b> A detect magic spell reveals the blood
              fountain radiates an aura of necromancy magic. The 5-foot-radius
              pool around the fountain is 2 feet deep. Any creature that is not
              undead that enters or starts its turn in the pool must succeed on
              a DC 13 Constitution saving throw. Creatures who fail gain one
              level of exhaustion. Creatures who succeed gain 5 temporary hit
              points. <br />
              <b>Treasure.</b> A DC 13 Wisdom (Perception) check notices a faint
              light shining up through the blood. If the characters carry no light
              source into the room, they automatically notice this light. At the
              bottom of the fountain is a gem of brightness with 25 charges remaining.
              The gem currently sheds bright light in a 30-foot-radius and dim light
              for an additional 30 feet.
            </p>
          </Tab>
        </Tabs>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span class="justify-center centered-element" style="width: 35%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>
            Players can ignore the doors, and continue forward int Z8, if the
            players enter the <b>Blood Fountain</b> first, they may start combat
            with the horde in the <b>Dining Room</b> be sure to ask how they open
            the door, whether its barging in or being sneaky.
          </li>
        </ul>
      </Card>
      <br />
      <br />
    </span>
  </div>
</span>
