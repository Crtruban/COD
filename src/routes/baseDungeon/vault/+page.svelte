<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Water Trap Chamber (Z11)";
  let src = "/vault.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <Card class="scroll-card" style="width: 25%">
        <Tabs>
          <Tab class="tab-item h5" open title="Zaldara">
            <img
            src={"/zaldara.png"}
            alt="map"
            class="object-cover rounded-lg"
          />
          </Tab>
          <Tab class="tab-item h5" title="Map">
            <img
            {src}
            alt="map"
            class="object-cover rounded-lg"
            style={"width:75%; height: 75%"}
          />

          </Tab>
        </Tabs>
      </Card>
     
      <Card
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <h5 class="tab-header">Zaldara's Vault</h5>
        <Card class="scroll-card">
          The air in this chamber is alive, dancing with some unseen energy. Two
          thick pillars extending floor to ceiling hum. Between them sits an
          iron chest.
        </Card>
        <p>
          One <b>specter</b> waits behind the pillars for the characters to enter
          the room before attacking. Chest. The chest is locked and bolted to the
          floor. Zaldara holds the key. It has AC 19, 27 hit points, and is immune
          to poison and psychic damage. A successful DC 15 Dexterity check with thieves’
          tools picks its lock and a successful DC 20 Strength check forces the chest
          open.
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
          Lightning Trap.
        </h5>
        <ul>
          <li>
            Any corporeal creature that touches or attacks the iron chest or the
            pillars triggers the pillar’s lighting trap. When the trap is
            triggered, each pillar shoots a bolt of lightning. The creature that
            triggered the trap must succeed on a DC 12 Dexterity saving throw or
            take 7 (2d6) lighting damage. If only one pillar remains active, the
            damage is reduced to 3 (1d6) lighting damage. A successful DC 13
            Intelligence (Arcana) check reveals the nature of the trap and the
            two ways to disable it: • If the pillars are destroyed, the trap no
            longer functions. Each pillar has AC 17, 36 hit points, and is
            immune to lightning, poison, and psychic damage. • Each pillar has a
            secret button that deactivates it. A successful DC 15 Wisdom
            (Perception) check made as an action spots the button on a pillar.
            Pushing this button is a bonus action that does not trigger the
            trap. If the button is pushed while the pillar is deactivated, it
            reactivates the trap.
          </li>
        </ul>
      </Card>
    </span>
    <span class="justify-center centered-element" style="width: 30%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Treasure.
        </h5>
        <ul>
          <li>
            The chest contains 5,000 gp in a mix of gems and coins, three spell scrolls containing any
            3rd-level wizard spells of your choice, and Zaldara’s spellbook,
            which is bound in humanoid skin.
          </li>
        </ul>
      </Card>
    </span>
    <span class="justify-center centered-element" style="width: 30%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Encounter With Zaldara
        </h5>
        <ul>
          <li>
            Zaldara’s spellbook contains all of the spells the
            lich has prepared, plus the following spells: <i>alter self</i>,
            <i>antimagic field</i>, <i>dream</i>, <i>etherealness</i>, <i>Evard’s black
            tentacles</i>, <i>feather fall</i>, <i>fly</i>, <i>gaseous form</i>, <i>hold monster</i>,
            <i>magic mouth</i>, <i>Major image</i>, <i>mass suggestion</i>,
            <i>phantom steed</i>, <i>protection from evil and good</i>,
            <i>telekinesis</i>, <i>teleport</i>, <i>Tenser’s floating disk</i>, <i>tongues</i>,
            <i>true seeing</i>, <i>vampiric touch</i>, <i>wall of fire</i>, and <i>wish</i>.
            When the characters get Zaldara’s spellbook,
            Zaldara will appear.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>
