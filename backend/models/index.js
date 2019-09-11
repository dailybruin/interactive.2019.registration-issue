const { mongoose } = require("../db");

exports.User = mongoose.model("User", {
    username: String,
    sessionID: String,
    score: Number
});