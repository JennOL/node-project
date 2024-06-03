const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./file.txt", "utf-8", (err, text) => {
  // <---- ejecutas este callback una vez termine de leer
  console.log("Primer texto: ", text);
});

console.log("-----> Haciendo cosas mientras....");

console.log("Leyendo el segundo archivo");
fs.readFile("./file2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto: ", text);
});
