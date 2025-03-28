export const mosnterList = {
    counterSpell: {
        name: "Counterspell",
        description: "Interrupts the casting of a spell.",
        level: 3,
        school: "Abjuration",
        castingTime: "1 Reaction",
        range: "60 Ft.",
        components: ["V"],
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
    },
    fireBall: {
        name: "Fireball",
        description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.",
        level: 3,
        school: "Evocation",
        castingTime: "1 Action",
        range: "150 Ft.",
        components: ["V", "S", "M"],
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
    }
}