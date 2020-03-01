const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./routes')
// const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
	.connect(process.env.MONGODB_URI || "mongodb+srv://iinegbedion:8Q1tHdVLHOCdLCvV@cluster0-uuy8n.azure.mongodb.net/Profyle", { useNewUrlParser: true })
	.then(() => console.log('MongoDB successfully connected'))
	.catch(err => console.log(err));
	
app.use(routes);
    
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