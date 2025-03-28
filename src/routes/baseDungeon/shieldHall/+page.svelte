<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Shield Hall (Z10)";
  let src = "/shieldRoom.png";
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
        <h5 class="tab-header">Shield Hall</h5>
        <Card class="scroll-card">
          A small stair leads from a landing to another floor just below it.
          Arms and armor are mounted on the walls. All are rusted and ruined,
          save for a round shield, painted red with two battered longswords
          hanging behind it.
        </Card>
        <br /><br />
        Behind the shield are are two rusty flying swords that attack any
        creature that removes the shield from the wall. The two levels of this
        chamber are 10 feet apart and connected by the stairs.
        <b>Treasure.</b> The shield on the wall is a shield of missile attraction
        that appears to be an arrowcatching shield.
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
            If the players don't interact with the shield, they can continue
            onto Z11, AKA the Water Trap Room.
          </li>
        </ul>
      </Card>
      <br />
      <br />
    </span>
  </div>
</span>
