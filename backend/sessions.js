const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { mongoose } = require("./db");

module.exports = session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    // resave: false,
    // saveUninitialized: true,
    cookie: {
        // secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 1000
    }
});;