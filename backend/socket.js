const SocketIO = require("socket.io");
const redisAdapter = require("socket.io-redis");
const sessions = require("./sessions");

module.exports = function (server) {
    const io = SocketIO(server);
    io.adapter(redisAdapter(process.env.REDIS_URL || "redis://redis:6379"));

    io.use((socket, next) => {
        sessions(socket.request, socket.request.res, next);
    });

    return server;
}