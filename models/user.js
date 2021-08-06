const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        require: true,
        unique: true
    },
});

const user = mongoose.model("User", userSchema);

module.exports = User;

