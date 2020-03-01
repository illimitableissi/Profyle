const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://iinegbedion:8Q1tHdVLHOCdLCvV@cluster0-uuy8n.azure.mongodb.net/Profyle"
);

const UserSeed = [{
    


}]



db.Users
    .remove({})
    .then(() => db.Users.collection.insertMany(UserSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });