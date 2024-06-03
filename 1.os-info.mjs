import {
  platform,
  release,
  arch,
  totalmem,
  freemem,
  cpus,
  uptime,
} from "node:os";

console.log("Nombre del sistema operativo", platform());
console.log("Arquitectura", release());
console.log("Version del sistema operativo", arch());
console.log("Memoria total disponible", totalmem() / 1024 / 1024);
console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("Uso de cpu", cpus());
console.log("Uptime", uptime() / 60 / 60);
