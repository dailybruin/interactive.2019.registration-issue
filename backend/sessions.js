const redis = require('redis')
const session = require('express-session');

let RedisStore = require('connect-redis')(session)
let client = redis.createClient(process.env.REDIS_URL || "redis://redis:6379")

module.exports = session({
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({ client }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 3600000
    }
});;