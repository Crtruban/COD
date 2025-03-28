<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Ghoul Dining Room / Blood Fountain (Z5, Z6, Z7)";
  let src = "/ghoulHall.png";
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
          <Tab open class="tab-item h5" title="Z8">
            <h5 class="tab-header">Ghoul Hall</h5>
            <Card class="scroll-card">
              This crumbling hall has a large curve and the stench of rotten
              eggs coming from cracks in the ceiling. A gross duet of gnashing
              teeth and guttural throat sounds comes from around the bend.
            </Card>
            <br /><br />
            Two <b>ghouls</b> lurk around the curve in the hall. If the
            characters wish to remain stealthy, each in the hall must succeed on
            a DC 10 Dexterity (Stealth) check or the ghouls hear them and come
            running. <br />
            <b>Poison Gas.</b> Poison gas leaks through the cracks in the ceiling
            from a magic chamber above. A creature that enters or starts its turn
            in the hall must succeed on a DC 10 Constitution saving throw or become
            poisoned until the start of its next turn.
          </Tab>
          <Tab class="tab-item" title="Z9">
            <h5 class="tab-header">Z9: Stairs Up</h5>
            <Card class="scroll-card">
              Stone stairs curl up in a spiral, completely filled with corpses.
              From the cries of battle, the ring of steel, and the scent of fire
              and blood, you know the battle upstairs rages as the Harpers take
              on the minions of Zaldara. The best way to help the Harpers is to
              stay down here and find the lich’s phylactery.
            </Card>
            <br />
            <p>
              The stair case is completely blocked off with corpses and gore.
              Players can certainly move the corpse to ascend the stairs, but
              this will be a fruitless effort. If this continues for more than
              neccesarry send a <b>Flesh Golem</b> or two emerging from the corpses
              to fight and hopefully deter players.
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
            This section is rather uninteresting with a single combat encounter.
            If the players go to the north, they'll end up in the shield
            room(Z10). If they go to the right, they'll end up in Zaldara's
            Vault(Z13). The door to Zaldara's vault is magically locked and can
            only be opened wtih the key gem from Z4, or the door can be knocked down with
            a strength check of DC 20.
          </li>
        </ul>
      </Card>
      <br />
      <br />
    </span>
  </div>
</span>
