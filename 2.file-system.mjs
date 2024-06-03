import { statSync } from "node:fs"; // a partir de Node 16, se recomienda poner node:

const stats = statSync("file.txt");

console.log(
  stats.isFile(), // Si es un fichero
  stats.isDirectory(), // Si es un directorio
  stats.isBlockDevice(), // Si es un dispositivo de bloques
  stats.isCharacterDevice(), // Si es un dispositivo de caracteres
  stats.isSymbolicLink(), // Si es un enlace simbolico
  stats.isFIFO(), // Si es un FIFO
  stats.isSocket(), // Si es un socket
  stats.size, // Tamano del fichero
  stats.atime, // Fecha de acceso
  stats.ctime, // Fecha de creacion
  stats.mtime // Fecha de modificacion
);
