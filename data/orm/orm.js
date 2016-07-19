var connection = require('../database/connection.js');

var getStudents = function() {
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

        	var studentsArray = [student];

        	console.log(studentsArray);
        }
    });
};

getStudents();

var getPersonnel = function() {
    var inquiry = 'SELECT * FROM personnel';
    connection.query(inquiry, function(err, data) {
        if (err) throw err;

        var exportPersonnel = data;
        // console.log(data);

        for (ep=0; ep<exportPersonnel.length; ep++) {

            var personnelID = exportPersonnel[ep].id;
            var personnelFN = exportPersonnel[ep].first_name;
            var personnelLN = exportPersonnel[ep].last_name;
            var personnelClearance = exportPersonnel[ep].clearance;
            var personnelEmail = exportPersonnel[ep].email;

            var staff = {
                id: personnelID,
                firstName: personnelFN,
                lastName: personnelLN,
                clearance: personnelClearance,
                email: personnelEmail
            };

            var personnelArray = [staff];

            console.log(personnelArray);

        }
    });
};

getPersonnel();





// module.exports = seatRandom;


// code below not to be used.. currently left for reference only.

// define('connection', 'seatRandom', function(){

// var connection = require('../database/connection.js');

// var seatRandom = function() {
//     var inquiry = 'SELECT * FROM students';
//     connection.query(inquiry, function(err, data) {
//         if (err) throw err;
//         // console.log(data);

//         var exportStudents = data;

//         for (es=0; es<exportStudents.length; es++) {

//             var studentID = exportStudents[es].id;
//             var studentFN = exportStudents[es].first_name;
//             var studentLN = exportStudents[es].last_name;
//             var behavior = exportStudents[es].behavior;
//             var randSeat = exportStudents[es].random_seating;
            
//             var student = {
//                 id: studentID,
//                 firstName: studentFN,
//                 lastName: studentLN,
//                 behavior: behavior,
//                 randSeat: randSeat
//             };

//             var students = [student];

//             console.log(students);
//         }
//     });
// };

// return seatRandom;

// seatRandom();

// // module.exports = seatRandom;

// console.log('if this works');

// });