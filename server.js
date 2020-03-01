const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('./config/keys').mongoURI;
const router = require("express").Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
	.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));
    
    // Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('profyles/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'profyles', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));