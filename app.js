var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Calls Database Connection

// var connection = require('./data/database/connection.js');

var orm = require('./data/orm/orm.js');

// Allows you to use files within the public folder

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/data/orm'));

// Functions for what happens when a / is hit on server

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/register', function (req, res) {
	res.render('register');
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/logout', function (req, res) {
	res.render('logout');
});

app.get('/randomseats', function (req, res) {
	res.render('randomseats');
});

app.get('/ascendingseats', function (req, res) {
	res.render('asc_seats');
});

app.get('/descendingseats', function (req, res) {
	res.render('desc_seats');
});

app.get('/randomgroups', function (req, res) {
	res.render('randomgroups');
});

app.get('/randomparticipation', function (req, res) {
	res.render('randomparticipation');
});

app.get('/contact', function (req, res) {
	res.render('contact');
});

app.get('/faq', function(req, res){
	res.render('faq');
});

app.get('/about', function(req, res){
	res.render('about');
});

// Listens to port on local server and on Heroku

app.listen(process.env.PORT || 8080, function() {
	console.log("Listening on specified port..");
});

process.on('uncaughtException', function(err) {
	console.log(err);
});