// .js --> por default utiliza commonJS
// .mjs --> es un modulo de ES6
// .cjs --> es un modulo de CommonJS
// .ts --> es un modulo de TypeScript
// .tsx --> es un modulo de TypeScript

import { sum, sub } from "./operaciones.mjs";

console.log(sum(8,4));
console.log(sub(2, 4));