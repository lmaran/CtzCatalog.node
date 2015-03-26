'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 1337);

// setup the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//console.log(path.join(__dirname, '../public'));

app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// set the public static resource folder
app.use(express.static(path.join(__dirname, '../public')));



// map the routes
require('./routes')(app);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});