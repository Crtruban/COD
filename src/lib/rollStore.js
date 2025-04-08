// @ts-nocheck
import { writable } from "svelte/store";

export const rollType = writable(() => {});
export const showRoll = writable(false);
export const rollResult = writable(0);
export const rollModifier = writable(0);
export const criticalFail = writable(false);
export const criticalSuccess = writable(false);

