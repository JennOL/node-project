// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const fs = require('node:fs')
// const { promisify } = require('node:util')
// const readFile = promisify(fs.readFile)

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo");
fs.readFile("./file.txt", "utf-8").then((text) => {
  console.log("Primer texto: ", text);
});

console.log("-----> Haciendo cosas mientras....");

console.log("Leyendo el segundo archivo");
fs.readFile("./file2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
