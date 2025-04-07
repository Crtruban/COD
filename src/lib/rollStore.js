// @ts-nocheck
import { writable } from "svelte/store";

export const rollType = writable(() => {});
export const showRoll = writable(false);

export const setRoll = (show) => {
    showRoll.set(show);
}

export const displayRoll = (rollType, resetTime) => {
    rollType.set(rollType);

    if(resetTime) {
        setTimeout(() => {

        }, resetTime)
    }
}