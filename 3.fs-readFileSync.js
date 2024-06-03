const fs = require("node:fs");

console.log("Leyendo el primer archivo");
const text = fs.readFileSync("./file.txt", "utf-8");

console.log(text);
console.log("Haciendo cosas mientras....");

console.log("Leyendo el segundo archivo");
const text2 = fs.readFileSync("./file2.txt", "utf-8");

console.log(text2);
