var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost' || process.env.IP,
	port: 3306,
	user: 'root',
	password: '' || process.argv[2],
	database: 'roster_db'
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected To Database!');
});

module.exports = connection;