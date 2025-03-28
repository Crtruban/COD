<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Glittering Cavern";
  let src = "/glitteringCavern.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <img
        {src}
        alt="map"
        class="object-cover rounded-lg"
        style={"width:800px"}
      />
      <Card
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <Tabs class="tab-group" tabStyle="full">
          <Tab open class="tab-item h5" title="Z2">
            <h5 class="tab-header">Skeleton Landing: Read as players enter</h5>
            <Card class="scroll-card">
              A voice from the darkness whispers with the dry rattle of death
              and malice. “By mistake or by foolishness, you have come too far.
              Your soul will be used to feed my endlessness.”
            </Card>
            If the two skeletons here have remained hidden behind the column, add:
            <Card class="scroll-card">
              Out of the darkness, two human skeletons move forward, armed and
              armored. Their ligaments and bones creak and twist in with
              unforgettable sounds.
            </Card>
            The voice is created by a magic mouth spell Zaldara cast on the south
            wall of this area. It is triggered whenever a creature enters this area.
            Ceiling. The ceiling is 15 feet high in this area.
          </Tab>
          <Tab class="tab-item" title="Z3">
            <h5 class="tab-header">Z3: Glittering Ooze Lair</h5>
            <Card class="scroll-card">
              The sound of dripping water grows more rapid here. Drops hit the
              ground so frequently, it’s almost as if the stalactites are
              creating a light rain. In the north wall, there’s an opening 10
              feet above the ground big enough for a crouched human.
            </Card>
            <p>
              A <b>glittering ooze</b> disguised as a stalactite clings to the
              ceiling, waiting for a character to walk beneath it so it can
              attack. It's located on the very northern edge of the area, 10
              feet.
              <br />
              <b>Ceiling.</b> The ceiling is 15 feet high in this area.
              Crawlspace. A successful DC 15 Strength (Athletics) check is
              required to climb the wet wall to get into the area where the gray
              ooze likes to feast on its victims. There are half-dissolved bones
              scattered in the space.
              <br />
              <b>Wet Floor.</b> Each time a creature moves more than half its
              speed across the floor of this area, it must succeed on a DC 10
              Dexterity (Acrobatics) check or fall prone.
              <br />
              <b>Treasure.</b> A character who searches through the bones in the
              crawlspace finds a half-dissolved lead case that holds 10 +1 bolts.
            </p>
          </Tab>
          <Tab class="tab-item" title="Z4">
            <h5 class="tab-header">Z4: Gem Chamber</h5>
            <Card class="scroll-card">
              Your light source is caught and refracted hundreds of times by the
              large pink crystals coming out of the walls and ceiling.
            </Card>
            <p>
              The gems are part of a trap set by Zaldara. <br />
              <b>Ceiling.</b> The ceiling is 15 feet high in this area.<br />
              <b> Gemstones.</b> A detect magic spell reveals each crystal in
              the chamber radiates an aura of conjuration magic. Characters
              proficient with jeweler’s tools know the gems are unnatural and
              worthless. A creature that breaks a gem off of the wall or ceiling
              must succeed on a DC 12 Charisma saving throw or it is teleported
              into cell A in area Z12.
              <br />
              A key to bypass the Kraken Door exists in here, if a player rolls an
              investigation of 18 or higher they will find the key.
              <br /><b> On successful rolls read the following:</b>
              <Card class="scroll-card">
                Brushing away the dust, your fingers close around a smooth, cold
                gemstone half-buried in the sand. As you lift it into the light,
                the intricate engraving of a kraken emerges—tentacles curling
                around the edges as if ready to ensnare. The gemstone shimmers
                with an eerie, deep-sea glow, and for a brief moment, you swear
                you feel something stir beneath your fingertips, as if the
                creature itself is watching… waiting.
              </Card>
              <br />
              <b>On failed investigations read this instead:</b>
              <Card class="scroll-card">
                Change it if they do this multiple times (CHAT GPT PROMPT: "Give
                a short description of being teleported by a magical gem into a
                dungeon" ) As you clutch the glowing gem, a surge of energy
                jolts through your body. The air warps, light twists, and in an
                instant, the world vanishes. A heartbeat later, you reappear
                with a dull thud on cold, damp stone. The stench of mildew fills
                your lungs, and the dim glow of flickering torches reveals
                rusted iron bars enclosing you. The gem in your hand fades to
                darkness—its magic spent—leaving you alone in the silent depths
                of a dungeon.
              </Card>
            </p>
          </Tab>
        </Tabs>
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
            a torch) light will refract from all the shining objects from water,
            and gemstones. This light will last about 5 minutes. Be sure to
            remind players who don't have darkvision of this.
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
          <li>
            If the players had not already fought the skeletons, combat will
            begin almost immediatly coming up to Z2.
          </li>
          <li>
            Players will be able to make a choice of Z3 or Z4, they won't be
            able to easily see into one from Z2, but they can easily approach
            each room and reutnr without startting any encounters
          </li>
          <br />
          <li>
            The ooze will attack them if they are not careful.Players will be
            able to see the ooze if they are within 10 feet of it.
          </li>
          <br />
          <l1>
            Z4 all traps can be avoided, but be sure to try to entice them to
            interact with the gems.
          </l1>
          <li>
            Once past their respective rooms, the players will come across the
            Kraken Door. If they choose to ignore it, proceed to the respective
            other room.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>

<style>
  :global(.tab-group) {
    width: 100%;
  }

  :global(.tab-item) {
    flex: 1; /* Make each tab header take equal space */
    text-align: center; /* Center-align the text */
  }

  /* Scroll container styling */
  :global(.scroll-card) {
    background: #fdf5e6; /* Light parchment color */
    border: 2px solid #8b4513; /* Dark brown border for an aged look */
    border-radius: 15px; /* Rounded edges to mimic a scroll */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    padding: 20px; /* Add spacing inside the card */
    font-family: "Papyrus", "Cursive", serif; /* Fantasy-style font */
    color: #4b2e2e; /* Dark brown text color */
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    background-size: cover; /* Subtle texture for the parchment */
  }

  /* Add a decorative border effect */
  :global(.scroll-card::before),
  :global(.scroll-card::after) {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* border: 2px solid #8b4513; */
    border-radius: 15px;
    top: 5px;
    left: 5px;
    z-index: -1;
    opacity: 0.5;
  }

  /* Add a curled edge effect */
  :global(.scroll-card::after) {
    top: -5px;
    left: -5px;
  }

  /* Optional: Style headings for a fantasy look */
  :global(.scroll-card h5) {
    font-family: "Uncial Antiqua", serif; /* Fantasy-style font for headings */
    font-size: 1.5rem;
    text-align: center;
    color: #8b4513; /* Darker brown for headings */
    margin-bottom: 10px;
  }

  /* Optional: Style list items for better readability */
  :global(.scroll-card ul) {
    list-style-type: none;
    padding-left: 20px;
  }

  :global(.scroll-card li) {
    margin-bottom: 10px;
  }
</style>
