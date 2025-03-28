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
            <Card
                class="scroll-card flex justify-right"
                style={"width:25%; height: 25%"}
            >
                <h5 class="tab-header">Wrapping Up's</h5>
                <Tabs class="tab-group" tabStyle="full">
                    <Tab open class="tab-item h5" title="Players Win">
                        <p>
                            Give a good "How do you want to do this for whoever
                            gets the killing blown."
                        </p>

                        <p>
                            The players then can return to Callbrax and give
                            Remallia the phylactery. If a wizard wishes to they
                            can attempt to scribe one spell from her spellbook
                            They however must succeed a Wisdom saving throw or
                            be poisoned (DC 16), they can only transcribe spells
                            that they are at appropriate level to cast. Remallia
                            will give everyone 1500gp for thier efforts. If no
                            rests are taken she will give a bonus of 1000g, else
                            that bonus will be used for funurel rites for the
                            fallen.
                        </p>
                    </Tab>
                    <Tab class="tab-item h5" title="Players Lose">
                        <p>
                            The last of the adventurers fell to their knees,
                            gasping for breath as the sickly green glow of
                            Zaldara, the Duchess of Rot, filled the chamber. Her
                            skeletal form stood tall among the carnage, empty
                            eye sockets burning with malevolent triumph. The
                            Harpers who had laid siege have perished them lay
                            lifeless, their noble cause reduced to a massacre.
                        </p>
                        <p>
                            Screams of agony faded into silence. Zaldara let out
                            a hollow, rasping laugh, the sound echoing through
                            the crypt like a death knell. She stepped over the
                            fallen, her bony fingers tracing the edge of her
                            rusted crown. "Fools," she mused, voice like dried
                            parchment. "You thought to unseat a queen of the
                            dead? Now, you will serve me in eternity." As the
                            darkness consumed the chamber, the last vestiges of
                            life flickered and died, leaving only silence… and
                            the rising of new undead under their Duchess’s
                            command.
                        </p>
                    </Tab>
                </Tabs>
            </Card>
            
        </div>
    </div>
    <br />
    <br />
</span>
