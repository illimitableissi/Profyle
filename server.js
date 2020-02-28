const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));
    
    // Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('profyle/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'profyle', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));