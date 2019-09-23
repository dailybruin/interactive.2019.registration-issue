// Instantiated instance of the Express class
// This does NOT start the server
// That happens in ./index.js
const app = require("express")();
const cors = require("cors");
// The body parser module gives us access to a JSON
// parsed req.body object
const bodyParser = require("body-parser");
// We are using sessions to keep track of user names
// rather than accepting them as 
const sessions = require("./sessions");
const router = require("./routes");

const whitelist = [
    "https://features.dailybruin.com",
    "https://optimistic-goldstine-ffd9f3.netlify.com",
    "http://localhost:3000"
];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(sessions);
app.use(router);

module.exports = app;