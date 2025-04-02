interface Entity {
    id: string;
    value: string;
    name: string;
    initiative: number;
    attributes: {
        strength: number,
        dexterity: number,
        consitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number
    }
}

export type { Entity};