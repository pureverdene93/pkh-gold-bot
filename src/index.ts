import { generateSignal } from "./strategy/goldStrategy.js";

console.log("XAUUSD Bot Running...");

const prices = [2300, 2305, 2310, 2298, 2320];

const signal = generateSignal(prices);

console.log("Signal:", signal);
