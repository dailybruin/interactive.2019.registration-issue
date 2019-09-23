const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { mongoose } = require("./db");

module.exports = session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000
    }
});;