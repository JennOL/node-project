const fs = require("node:fs/promises");

console.log("-----> Haciendo cosas antes ....");

Promise.all([
  fs.readFile("./file.txt", "utf-8"),
  fs.readFile("./file2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("Primer texto: ", text1);
  console.log("Segundo texto: ", text2);
});

console.log("-----> Haciendo cosas despues....");
