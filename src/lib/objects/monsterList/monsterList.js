import { spellList } from "../spellList/spellList"
export const mosnterList = {
    skeletonSoldier: {
        name: "Skeleton Soldier",
        img: "/skeleton.png",
        hp: 25,
        ac: 15,
        movement: "30 Ft.",
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
        img: "/skeleton.png",
        hp: 20,
        ac: 10,
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
    }
}