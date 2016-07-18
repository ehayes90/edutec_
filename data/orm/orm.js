

var connection = require('../database/connection.js');

var seatRandom = function() {
    var inquiry = 'SELECT * FROM students';
    connection.query(inquiry, function(err, data) {
        if (err) throw err;
        // console.log(data);

        var exportStudents = data;

        for (es=0; es<exportStudents.length; es++) {

        	var studentID = exportStudents[es].id;
        	var studentFN = exportStudents[es].first_name;
        	var studentLN = exportStudents[es].last_name;
        	var behavior = exportStudents[es].behavior;
        	var randSeat = exportStudents[es].random_seating;
        	
        	var student = {
        		id: studentID,
        		firstName: studentFN,
        		lastName: studentLN,
        		behavior: behavior,
        		randSeat: randSeat
        	};

        	var students = [student];

        	console.log(students);
        }
    });
};

seatRandom();

module.exports = seatRandom;