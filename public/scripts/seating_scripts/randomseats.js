$(document).ready (function() {


var desks = [
	$(".randStuD1"),
	$(".randStuD2"),
	$(".randStuD3"),
	$(".randStuD4"),
	$(".randStuD5"),
	$(".randStuD6"),
	$(".randStuD7"),
	$(".randStuD8"),
	$(".randStuD9"),
	$(".randStuD10"),
	$(".randStuD11"),
	$(".randStuD12"),
	$(".randStuD13"),
	$(".randStuD14"),
	$(".randStuD15"),
	$(".randStuD16"),
	$(".randStuD17"),
	$(".randStuD18"),
	$(".randStuD19"),
	$(".randStuD20"),
	$(".randStuD21"),
	$(".randStuD22"),
	$(".randStuD23"),
	$(".randStuD24"),
	$(".randStuD25"),
	$(".randStuD26"),
	$(".randStuD27"),
	$(".randStuD28"),
	$(".randStuD29"),
	$(".randStuD30")
];


$(".clearRandomSeats").on("click", function(){

	for ( d=0; d<desks.length; d++) {

		$(desks[d]).html("");
	}
	
});




// $.ajax({
//   url: "/api/students",
//   cache: false
// })
//   .done(function( data ) {
//     console.log(data);

// var studentsJson = data;

// for (i=0; i<studentsJson.length; i++) {
// 	var newnew = studentsJson[i].first_name;





// 	var studentObject = [newnew];

// 	console.log(studentObject);
// }

//   });

// });














// var shuffle = function(a) {
// 	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
// 	return a;
// };

// $(".runRandomSeats").on('click', function() {

// 	$.ajax({
// 	  url: "/api/students",
// 	  cache: false
// 	})
// 	  .done(function(data) {
// 	    // console.log(data);

// 	var studentsArray = data;

// 	console.log("api data " + studentsArray);

// 		for (i=0; i<studentsArray.length; i++) {
			
// 			var studentID = studentsArray[i].id;
// 			//console.log(map.studentID);
// 			console.log(studentID);

// 			var studentFN = studentsArray[i].first_name;
// 			var studentLN = studentsArray[i].last_name;
// 			var behavior = studentsArray[i].behavior;
// 			var randSeat = studentsArray[i].random_seating;

// 			var student = {
// 				id: studentID,
// 				firstName: studentFN,
// 				lastName: studentLN,
// 				behavior: behavior,
// 				randSeat: randSeat
// 			};

// 			var students = [student];

// 			console.log("student data " + student);

// 			var shuffleStudents = shuffle(students);

// 			var randomStudents = students;

// 			console.log(randomStudents);



// 			for ( d=0; d<desks.length; d++) {
// 				$(desks[d]).html(" " + randomStudents.firstName + " " + randomStudents.lastName);
// 			}
// 		}

// 	  });


// });




// $(".runRandomSeats").on('click', function() {

// 	for ( d=0; d<desks.length; d++) {

// 		var randomStudents = students[Math.floor(Math.random()*students.length)];

// 		$(desks[d]).html(" " + randomStudents.firstName + " " + randomStudents.lastName);
// 	}

// });





});