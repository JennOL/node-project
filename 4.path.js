const path = require("node:path");

// barra separadora de carpetas segun SO
console.log("Barra separadora segun SO: ", path.sep);

// unir rutas con path.join
const filePath = path.join("./content", "subfolder", "test.txt");
console.log("filePath: ", filePath);

const base = path.basename(filePath);
console.log("base: ", base);

const filename = path.basename("./content/subfolder/test.txt", ".txt");
console.log("filename: ", filename);

const extension = path.extname("my.super.image.jpg");
console.log("extension: ", extension);
