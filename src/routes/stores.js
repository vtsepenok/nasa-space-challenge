import { writable } from "svelte/store";

export let selectedPage = writable("inputs_page");
export let sattelite = writable("Ace");
export let year = writable("2019");
export let day = writable("");
export let currentDays = writable([]);
export let selectedReconnection = writable("");

export let observations = writable([]);