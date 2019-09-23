const session = require("express-session");

module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 3600000
    }
});;