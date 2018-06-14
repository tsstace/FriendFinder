//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up Express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routes
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});