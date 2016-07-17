var connection = require('../database/connection.js');

var myClass = function() {
    var inquiry = 'SELECT * FROM students';
    connection.query(inquiry, function(err, data) {
        if (err) throw err;
        console.log(data);
    	});
};

myClass();