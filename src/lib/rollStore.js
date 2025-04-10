// @ts-nocheck
import { writable } from "svelte/store";

export const rollType = writable(() => { });
export const showRoll = writable(false);
export const rollResult = writable(0);
export const rollModifier = writable(0);
export const criticalFail = writable(false);
export const criticalSuccess = writable(false);
export const rollCalculation = writable("");
//Think of the function in DND terms, 2d6 + 3 = setDirceRoll(2, 6, 3)
export const setDiceRoll = (amountOfDice = 1, diceType = 20, diceMod = 0) => {
    rollCalculation.set(
        `${amountOfDice}d${diceType} ${diceMod ? '+' : ''} ${diceMod}`
    );
    showRoll.set(true);
    rollType.set(() => {
        let roll = Math.floor(Math.random() * diceType) + 1;
        if (diceType == 20) {


            if (roll == 1) {
                criticalFail.set(true);
            }
            else if (roll == 20) {
                criticalSuccess.set(true);
            }

        } else {
            roll = amountOfDice * (Math.floor(Math.random() * diceType) + 1)
        }
        rollResult.set(roll);
        rollModifier.set(diceMod);
        return (
            roll +
            diceMod
        );
    });
}

