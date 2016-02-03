
// Dependencies
var url = '';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://con:pass@ds055515.mongolab.com:55515/gegillam',
	{authMechanism: 'ScramSHA1'});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');

