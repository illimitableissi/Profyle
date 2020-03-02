const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    profilePic: {
        type: String,
        required: true,
    },
    backgroundImg: {
        type: String,
        required: false,
    },
    summary: {
        type: String,
        required: true,
    },
    photoUrlOne: {
        url: String,
        caption: String,
        posted: {type: Date, default: Date.now}
    },
    photoUrlTwo: {
        url: String,
        caption: String,
        posted: {type: Date, default: Date.now}
    },
    photoUrlThree: {
        url: String,
        caption: String,
        posted: {type: Date, default: Date.now}
    },
    goals: {
        type: String,
        required: true,
    },
    accomplishments: {
        type: String,
        required: true,
    },
    hobbies: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User