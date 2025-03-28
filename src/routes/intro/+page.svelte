<script lang="ts">
    import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
    let title = "Introduction";
    let src = "/vault.png";

    let syndra = {
        blockDescription: "",
        characterDescription: "",
    };
</script>

<span>
    <h1>{title}</h1>
    <div style={"display: flexBox"}>
        <div class="flex justify-center">
            <Card class="scroll-card" style="width: 25%">
                <Tabs>
                    <Tab class="tab-item h5" open title="Syndra Silvane">
                        <img
                            src={"/syndra.png"}
                            alt="map"
                            class="object-cover rounded-lg"
                        />
                    </Tab>
                    <Tab class="tab-item h5" title="Remalia Haventree">
                        <img
                            src={"/remallia.jpg"}
                            alt="map"
                            class="object-cover rounded-lg"
                        />
                    </Tab>
                    <Tab class="tab-item h5" title="Callbrax">
                        <img
                            src={"/callbrax.png"}
                            alt="map"
                            class="object-cover rounded-lg"
                        />
                    </Tab>
                </Tabs>
            </Card>

            <Card
                class="scroll-card flex justify-right"
                style={"width:25%; height: 25%"}
            >
                <h5 class="tab-header">NPC's</h5>
                <Card class="scroll-card">
                    Do your best to describe the NPC's to the players. Don't be
                    superflous with your descriptions.
                </Card>
                <ul>
                    <li>
                        Syndra: The person who made the contract and is heading
                        the mission. She is a half-elf and a member of the
                        Harpers. She is a powerful wizard and has a lot of
                        knowledge about the area. She is very serious about her
                        work and will do anything to get the job done.
                    </li>
                    <li>
                        Remallia: Just a different person to explain in more
                        details after Syndra has left. She will tell the group
                        about Callbrax.
                    </li>
                    <li>
                        Callbrax: The sailor of the diviner he generally will
                        just see off the adventurers. His ship has a few
                        supplies but he isn't willing to part with them. Have
                        the players convince him. Below 10, nothing, 10-15 1D4
                        of plain healing potions, 15-20 1d4 of greater healing
                        potions, 20 either 2d4 of greater healnig potions, or
                        1d4 of supreeme healing potions
                    </li>
                </ul>
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
                    Start of the session
                </h5>
                <ul>
                    <li>
                        The ADventurers guild will tell Lincoln of a job.
                        Explain to him that it pays well but 4 other adventurers
                        will be joining him, and he is to meet the client at the
                        Pig & Swine Tavern in Greyhawk. Upon entering the tavern
                        he is hailed by a female Sunelf, she will introduce
                        herself as Remallia Haventree.
                    </li>
                </ul>
            </Card>
        </span>
        <span class="justify-center centered-element" style="width: 30%;">
            <Card class="scroll-card">
                <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    The Mission.
                </h5>
                <ul>
                    <li>
                        • Remallia leads a group of Harpers who are trying to
                        uncover the cause of the death curse.
                    </li>
                    <li>
                        • The Harpers believe the death curse is similar to the
                        magic a lich uses to feed souls to its phylactery. They
                        think a lich would be able to trace the source of the
                        death curse.
                    </li>
                    <li>
                        • Remallia’s team is planning on raiding the lair of a
                        lich named Zaldara Cordress, known as the Duchess of
                        Rot, and forcing the evil being to cooperate in tracking
                        the source of the death curse.
                    </li>
                    <li>
                        • Zaldara’s tower is in the nearby Cloakwood. It is
                        close enough that the journey is easy from Grey Hawk,
                        but remote enough that no innocent people are put at
                        risk during the raid.
                    </li>
                    <li>
                        • Remallia believes the key to getting Zaldara to
                        cooperate is to steal her phylactery. Harper wizards
                        used the scrying spell to determine Zaldara’s phylactery
                        is her spellbook, a tome bound in humanoid skin, which
                        she keeps locked in a vault in her basement.
                    </li>
                    <li>
                        • Remallia needs a small force of adventurers to sneak
                        into Zaldara’s cellar to look for her phylactery, while
                        the main force of Harpers attacks the ground and upper
                        floors of the tower to draw most of the lich’s guards
                        away from the phylactery. She asks the characters to be
                        the smaller strike team and offers them one potion of
                        greater healing each upfront and 500 gp as a reward upon
                        completion of the job.
                    </li>
                </ul>
            </Card>
        </span>
        <span class="justify-center centered-element" style="width: 30%;">
            <Card class="scroll-card">
                <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Sailing
                </h5>
                <ul>
                    <li>
                        Tomorrow morning, the characters will leave Baldur’s
                        Gate aboard the Diviner, a keelboat bound for the
                        Cloakwood. It will sail out to the Sea of Swords and
                        then south down the Sword Coast. • The Diviner has a
                        single Harper crewmember, Callbrax (CG male lightfoot
                        halfling mage), who can drive the vessel, which is
                        stocked with plenty of food and water for the three-day
                        journey. • On day three of the journey, the ship will
                        arrive at a seaside cave connected to Zaldara’s tower.
                        When the characters hear Remallia’s horn blow, it
                        signals the Harper’s assault on the tower has begun. At
                        that point, the characters need to move as quickly as
                        possible to find the phylactery to minimize the number
                        of Harper casualties.The sooner they find the spellbook,
                        the sooner the violence happening above them can end. •
                        Once the spellbook is found, they should return to the
                        Diviner. Callbrax will teleport the characters and the
                        phylactery to Remallia. The characters have a chance to
                        rest and buy supplies before leaving on the Diviner the
                        next day.
                    </li>
                </ul>
            </Card>
        </span>
    </div>
</span>
