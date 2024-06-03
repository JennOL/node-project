const fs = require("node:fs/promises");

// IIFE - Inmediately Invoked Function Expression
(async () => {
  console.log("Leyendo el primer archivo");
  const text1 = await fs.readFile("./file.txt", "utf-8");
  console.log("Primer texto: ", text1);

  console.log("-----> Haciendo cosas mientras....");

  console.log("Leyendo el segundo archivo");
  const text2 = await fs.readFile("./file2.txt", "utf-8");
  console.log("Segundo texto: ", text2);
})();
