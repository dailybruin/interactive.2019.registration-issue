// Instantiated instance of the Express class
// This does NOT start the server
// That happens in ./index.js
const app = require("express")();
// The body parser module gives us access to a JSON
// parsed req.body object
const bodyParser = require("body-parser");
// We are using sessions to keep track of user names
// rather than accepting them as 
const sessions = require("./sessions");
const router = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sessions);
app.use(router);

module.exports = app;