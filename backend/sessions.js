const redis = require("redis");
const session = require("express-session");
const RedisStore = require("connect-redis")(session)
const client = redis.createClient(process.env.REDIS_URL || "redis://redis:6379")

module.exports = session({
    secret: process.env.SESSION_SECRET,
    // store: new RedisStore({ client }),
    resave: false,
    saveUninitialized: false
});;