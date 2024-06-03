require("dotenv").config();
const http = require("node:http"); // protocolo http
const { findAvailablePort } = require("./9.free-port");
const desiredPort = process.env.PORT || 3000;

console.log("desiredPort", desiredPort);

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hello World");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
