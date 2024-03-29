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
        required: false,
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
        type: String,
        required: true,
    },
    photoOneCaption: {
        type: String,
        required: true,
    },
    photoUrlTwo: {
        type: String,
        required: true,
    },
    photoTwoCaption: {
        type: String,
        required: true,
    },
    photoUrlThree: {
        type: String,
        required: true,
    },
    photoThreeCaption: {
        type: String,
        required: false,
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
module.exports = User;