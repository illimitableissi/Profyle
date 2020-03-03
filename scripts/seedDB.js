const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI ||
    "mongodb+srv://iinegbedion:8Q1tHdVLHOCdLCvV@cluster0-uuy8n.azure.mongodb.net/Profyle"
);

const userSeed = [
    {
    userName: "",
    profilePic: "",
    backgroundImg: "",
    summary: "",
    photoUrlOne: {
        url: "",
        caption: ""
    },
    photoUrlTwo: {
        url: "",
        caption: ""
    },
    photoUrlThree: {
        url: "",
        caption: ""
    },
    goals: "",
    accomplishments: "",
    hobbies: "",
    skills: "",
}
]


db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });