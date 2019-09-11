const { User } = require("../models");

exports.getUser = async function (username) {
    try {
        return await User.findOne({ username });
    } catch (err) {
        throw err;
    }
};

exports.updateScore = async function (username, score) {
    try {
        return await User.findOneAndUpdate({
            username
        }, { score }, {
            new: true,
            upsert: true
        });
    } catch (err) {
        throw err;
    }
}