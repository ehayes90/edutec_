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

var shuffle = function(a) {
	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
	return a;
};

$(".runRandomSeats").on('click', function() {

	$.ajax({
	  url: "/api/students",
	  cache: false
	})
	  .done(function(data) {
	    // console.log(data);

	var studentsArray = data;

	console.log("api data " + studentsArray);

		for (i=0; i<studentsArray.length; i++) {
			
			var studentID = studentsArray[i].id;
			//console.log(map.studentID);
			console.log(studentID);

			var studentFN = studentsArray[i].first_name;
			var studentLN = studentsArray[i].last_name;
			var behavior = studentsArray[i].behavior;
			var randSeat = studentsArray[i].random_seating;

			var student = {
				id: studentID,
				firstName: studentFN,
				lastName: studentLN,
				behavior: behavior,
				randSeat: randSeat
			};

			var students = [student];

			console.log("student data " + student);

			var shuffleStudents = shuffle(students);

			var randomStudents = students;

			console.log(randomStudents);



			for ( d=0; d<desks.length; d++) {
				$(desks[d]).html(" " + randomStudents.firstName + " " + randomStudents.lastName);
			}
		}

	  });


});




// $(".runRandomSeats").on('click', function() {

// 	for ( d=0; d<desks.length; d++) {

// 		var randomStudents = students[Math.floor(Math.random()*students.length)];

// 		$(desks[d]).html(" " + randomStudents.firstName + " " + randomStudents.lastName);
// 	}

// });


$(".clearRandomSeats").on("click", function(){

	for ( d=0; d<desks.length; d++) {

		$(desks[d]).html("");
	}
	
});


});








//old students array that was used for data testing. To be removed later. Left for reference.

// var students = [
// 	{
// 		id: 1,
// 		firstName: "Ben",
// 		lastName: "Jerry",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},
	
// 	{
// 		id: 2,
// 		firstName: "Rat",
// 		lastName: "Berry",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 3,
// 		firstName: "Max",
// 		lastName: "Penny",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 4,
// 		firstName: "Roland",
// 		lastName: "Sams",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 5,
// 		firstName: "Dylan",
// 		lastName: "Rice",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 6,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 7,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 8,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 9,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 10,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 11,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 12,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 13,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 14,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 15,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 16,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 17,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 18,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 19,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 20,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 21,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 22,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 23,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 24,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 26,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 26,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 27,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 28,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 1,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 29,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 2,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	},

// 	{
// 		id: 30,
// 		firstName: "",
// 		lastName: "",
// 		behValue: 3,
// 		randomSeat: [],
// 		ascendingSeat: [],
// 		descendingSeat: [],
// 		randomParticipation: [],
// 		randomGroup: []
// 	}
// ];