import { spellList } from "../spellList/spellList"
export const mosnterList = {
    skeletonSoldier: {
        name: "Skeleton Soldier",
        img: "/skeleton.png",
        hp: 25,
        ac: 15,
        movement: "30 Ft.",
        attributes: {
            strength: 14,
            dexterity: 10,
            constitution: 14,
            intelligence: 6,
            wisdom: 8,
            charisma: 5,
        },
        actions: {
            ExtraAttack: {
                description: "The skeleton soldier makes two physical attacks.",
            },
            Longsword: {
                type: "Melee",
                Attack: "+4",
                damage: "1d8+4 (6)",
                description: "Slashing Damage",
            },
            Shortbow: {
                type: "Ranged",
                Attack: "+4",
                damage: "1d6+6 (33)",
                description: "Piercing Damage",
            },
        },
        resistances: ["Piercing", "Slashing"],
        spells: [],
    },
    skeletonMage: {
        name: "Skeleton Mage",
        img: "/skeletonMage.png",
        hp: 20,
        ac: 10,
        attributes: {
            strength: 6,
            dexterity: 10,
            constitution: 15,
            intelligence: 16,
            wisdom: 12,
            charisma: 10,
        },
        description: "A skeleton with a staff and a spellbook. Effectively a 5th level wizard.",
        movement: "30 Ft.",
        actions: {
            Firebolt: {
                type: "Ranged",
                damage: "1d8+4 (6)",
                description: "Slashing Damage",
            },
            Quarterstaff: {
                type: "Ranged",
                Attack: "0",
                damage: "1d8 (4)",
                description: "Blunt Damage",
            },
        },
        resistances: ["Piercing", "Slashing"],
        spells: [spellList.fireBolt, spellList.mageArmor, spellList.shield],
    },
    zaldara: {
        name: "Zaldara",
        img: "/zaldara.png",
        hp: 235,
        ac: 17,
        attributes: {
            strength: 11,
            dexterity: 16,
            constitution: 16,
            intelligence: 20,
            wisdom: 14,
            charisma: 16,
        },
        description: "Zaldara the duchess of rot, is a powerful undead sorceress, with the stats of a Lich",
        movement: "30 Ft.",
        saving_throws: "Con + 10, Int +12, Wis +9",
        senses: "truesight 120ft, passive perception 19",
        actions: {
            Firebolt: {
                type: "Ranged",
                damage: "1d8+4 (6)",
                description: "Slashing Damage",
            },
            Quarterstaff: {
                type: "Ranged",
                Attack: "0",
                damage: "1d8 (4)",
                description: "Blunt Damage",
            },
            Legendary_Resistance: {
                description: "If the lich fails a saving throw, it can choose to succeed instead."
            },
            Spellcasting: {
                description: "Zaldara is a 20th level spellcaster. Her spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). She has the following spells prepared:",
            }
        },
        resistances: ["Piercing", "Slashing"],
        spells: [spellList.mageHand, spellList.prestidigitation, spellList.rayOfFrost, spellList.detectMagic, spellList.magicMissile, spellList.shield, spellList.thunderWave, spellList.detectThoughts, spellList.invisibility, spellList.melfsAcidArrow, spellList.mirrorImage, spellList.animateDead, spellList.counterSpell, spellList.dispelMagic, spellList.blight, spellList.disintegrate],
    },
    fleshGolem: {
        name: "Flesh Golem",
        img: "/fleshGolem.png", // Replace with the actual image path
        hp: 93,
        ac: 9,
        attributes: {
            strength: 19,
            dexterity: 9,
            constitution: 18,
            intelligence: 6,
            wisdom: 10,
            charisma: 5,
        },
        description: "A lumbering mass of stitched-together body parts, animated by dark magic.",
        movement: "30 Ft.",
        saving_throws: "Str +4, Con +5",
        senses: "darkvision 60ft, passive perception 10",
        actions: {
            Slam: {
                type: "Melee",
                Attack: "+7",
                damage: "2d8+4 (13)",
                description: "Bludgeoning Damage",
            },
            Berserk: {
                description: "When the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. While berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object."
            },
        },
        resistances: ["Cold", "Fire", "Lightning"],
        immunities: ["Poison", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
        condition_immunities: ["Charmed", "Exhaustion", "Frightened", "Paralyzed", "Petrified", "Poisoned"],
        spells: [], // Flesh Golems typically don't cast spells
    },
    skeletonKnight: {
        name: "Skeleton Knight",
        img: "/skeletonKnight.png", // Replace with the actual image path
        hp: 75, // Increased hit points for a tougher challenge
        ac: 18, // Plate armor and shield
        attributes: {
            strength: 16,
            dexterity: 14,
            constitution: 17,
            intelligence: 8,
            wisdom: 10,
            charisma: 6,
        },
        description: "A fearsome undead warrior clad in ancient armor, wielding a longsword and shield. The Skeleton Knight is a relentless foe, driven by dark magic to protect its master or domain.",
        movement: "30 Ft.",
        saving_throws: "Str +5, Con +4, Wis +2",
        senses: "darkvision 60ft, passive perception 12",
        actions: {
            Multiattack: {
                description: "The Skeleton Knight makes two melee attacks with its longsword.",
            },
            Longsword: {
                type: "Melee",
                Attack: "+6",
                damage: "1d8+4 (8) slashing damage, or 1d10+4 (9) slashing damage if used with two hands.",
                description: "A powerful melee attack with its longsword.",
            },
            ShieldBash: {
                type: "Melee",
                Attack: "+6",
                damage: "1d6+2 (5) bludgeoning damage",
                description: "If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
            },
        },
        abilities: {
            UndeadFortitude: {
                description: "If damage reduces the Skeleton Knight to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the Skeleton Knight drops to 1 hit point instead.",
            },
            Parry: {
                description: "The Skeleton Knight adds 2 to its AC against one melee attack that would hit it. To do so, the Skeleton Knight must see the attacker and be wielding a melee weapon.",
            },
        },
        resistances: ["Necrotic", "Piercing", "Slashing"],
        immunities: ["Poison"],
        condition_immunities: ["Exhaustion", "Poisoned"],
        spells: [], // Skeleton Knights typically don't cast spells
    },
    glitteringOoze: {
        name: "Glittering Ooze",
        img: "/glitteringOoze.png", // Replace with the actual image path
        hp: 85, // Hit points for a challenging ooze
        ac: 8, // Oozes typically have low AC
        description: "A shimmering, gelatinous creature that clings to ceilings and walls, waiting to ambush unsuspecting prey. Its glittering surface reflects light, making it appear harmless until it strikes.",
        movement: "10 Ft., climb 10 Ft.",
        saving_throws: "Con +3",
        attributes: {
            strength: 16,
            dexterity: 14,
            constitution: 16,
            intelligence: 6,
            wisdom: 8,
            charisma: 5,
        },
        senses: "darkvision 60ft, passive perception 10",
        actions: {
            Pseudopod: {
                type: "Melee",
                Attack: "+5",
                damage: "2d8+3 (12) bludgeoning damage plus 1d8 acid damage",
                description: "The ooze lashes out with a pseudopod, dealing bludgeoning and acid damage.",
            },
            Engulf: {
                description: "The ooze moves up to its speed. While doing so, it can enter a creature's space. Whenever the ooze enters a creature's space, the creature must make a DC 14 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the ooze. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the ooze enters the creature's space, and the creature takes 3d6 acid damage and is restrained until it escapes.",
            },
        },
        abilities: {
            Adhesive: {
                description: "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
            },
            Split: {
                description: "When the ooze takes slashing or lightning damage, it splits into two new oozes if it has at least 10 hit points. Each new ooze has hit points equal to half the original ooze's, rounded down.",
            },
        },
        resistances: ["Acid", "Cold", "Fire"],
        immunities: ["Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
        condition_immunities: ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Unconscious"],
        spells: [], // Glittering Oozes typically don't cast spells
    },
    ghoul: {
        name: "Enhanced Ghoul",
        img: "/enhancedGhoul.png", // Replace with the actual image path
        hp: 52, // Increased hit points for a tougher challenge
        ac: 14, // Natural armor
        description: "A more powerful and cunning undead creature, these ghouls are faster, stronger, and more dangerous than their lesser kin. They hunger for the flesh of the living and are driven by dark magic.",
        movement: "30 Ft.",
        saving_throws: "Dex +3, Con +4",
        attributes: {
            strength: 17,
            dexterity: 14,
            constitution: 15,
            intelligence: 10,
            wisdom: 8,
            charisma: 5,
        },
        senses: "darkvision 60ft, passive perception 10",
        actions: {
            Multiattack: {
                description: "The ghoul makes two attacks: one with its claws and one with its bite.",
            },
            Bite: {
                type: "Melee",
                Attack: "+5",
                damage: "2d6+2 (9) piercing damage",
                description: "The ghoul bites its target, dealing piercing damage.",
            },
            Claws: {
                type: "Melee",
                Attack: "+5",
                damage: "2d4+2 (7) slashing damage",
                description: "If the target is a creature other than an undead, it must succeed on a DC 12 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            },
        },
        abilities: {
            TurnResistance: {
                description: "The ghoul has advantage on saving throws against effects that turn undead.",
            },
            UndeadFortitude: {
                description: "If damage reduces the ghoul to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the ghoul drops to 1 hit point instead.",
            },
        },
        resistances: ["Necrotic"],
        immunities: ["Poison"],
        condition_immunities: ["Charmed", "Exhaustion", "Poisoned"],
        spells: [], // Ghouls typically don't cast spells
    },
    rottingSpiderSwarm: {
        name: "Rotting Spider Swarm",
        img: "/rottingSpiderSwarm.png", // Replace with the actual image path
        hp: 36, // Swarm creatures typically have lower HP
        ac: 12, // Natural armor
        description: "A writhing mass of undead spiders, their decaying bodies animated by dark magic. The swarm moves as one, overwhelming its prey with venomous bites and necrotic energy.",
        movement: "20 Ft., climb 20 Ft.",
        saving_throws: "Dex +3, Con +2",
        attributes: {
            strength: 14,
            dexterity: 17,
            constitution: 15,
            intelligence: 6,
            wisdom: 8,
            charisma: 5,
        },
        senses: "darkvision 60ft, passive perception 10",
        actions: {
            Bite: {
                type: "Melee",
                Attack: "+5",
                damage: "4d4 (10) piercing damage plus 2d6 (7) necrotic damage",
                description: "The swarm bites all creatures in its space, dealing piercing and necrotic damage.",
            },
            Swarm: {
                description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny spider. The swarm can't regain hit points or gain temporary hit points.",
            },
        },
        abilities: {
            UndeadFortitude: {
                description: "If damage reduces the swarm to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the swarm drops to 1 hit point instead.",
            },
            Necrotic_Aura: {
                description: "At the start of the swarm's turn, all creatures within 5 feet of it take 1d6 necrotic damage.",
            },
        },
        resistances: ["Necrotic", "Piercing", "Slashing"],
        immunities: ["Poison"],
        condition_immunities: ["Charmed", "Exhaustion", "Frightened", "Paralyzed", "Petrified", "Poisoned"],
        spells: [], // Swarms typically don't cast spells
    },
}