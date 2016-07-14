var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));

app.get('/', function (req, res){
	res.sendFile(path.join(_dirname, '/public', 'index.html'))
});

app.listen(process.env.PORT || 8080, function() {
	console.log("Listening on specified port..");
});