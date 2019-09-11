require("dotenv").config();
const http = require("http");
const app = require("./app");
const socket = require("./socket");

const server = socket(http.createServer(app));

const port = 3000;
server.listen(port, () =>
    console.log(`Listening on port ${port} on ${process.env.NODE_ENV} mode!`));