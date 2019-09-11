const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL || "mongodb://db_mongo");

module.exports = {
    mongoose
}