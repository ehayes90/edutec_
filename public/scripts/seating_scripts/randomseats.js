$(document).ready (function() {

var students = [
	{
		id: 1,
		firstName: "Ben",
		lastName: "Jerry",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},
	
	{
		id: 2,
		firstName: "Rat",
		lastName: "Berry",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 3,
		firstName: "Max",
		lastName: "Penny",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 4,
		firstName: "Roland",
		lastName: "Sams",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 5,
		firstName: "Dylan",
		lastName: "Rice",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 6,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 7,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 8,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 9,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 10,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 11,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 12,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 13,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 14,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 15,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 16,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 17,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 18,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 19,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 20,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 21,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 22,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 23,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 24,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 26,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 26,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 27,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 28,
		firstName: "",
		lastName: "",
		behValue: 1,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 29,
		firstName: "",
		lastName: "",
		behValue: 2,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	},

	{
		id: 30,
		firstName: "",
		lastName: "",
		behValue: 3,
		randomSeat: [],
		ascendingSeat: [],
		descendingSeat: [],
		randomParticipation: [],
		randomGroup: []
	}
];

var desks = [
	$(".randSeat1"),
	$(".randSeat2"),
	$(".randSeat3"),
	$(".randSeat4"),
	$(".randSeat5"),
	$(".randSeat6"),
	$(".randSeat7"),
	$(".randSeat8"),
	$(".randSeat9"),
	$(".randSeat10"),
	$(".randSeat11"),
	$(".randSeat12"),
	$(".randSeat13"),
	$(".randSeat14"),
	$(".randSeat15"),
	$(".randSeat16"),
	$(".randSeat17"),
	$(".randSeat18"),
	$(".randSeat19"),
	$(".randSeat20"),
	$(".randSeat21"),
	$(".randSeat22"),
	$(".randSeat23"),
	$(".randSeat24"),
	$(".randSeat25"),
	$(".randSeat26"),
	$(".randSeat27"),
	$(".randSeat28"),
	$(".randSeat29"),
	$(".randSeat30")
];

$(".runRandomSeats").on('click', function() {

	for ( d=0; d<desks.length; d++) {

		var randomStudents = students[Math.floor(Math.random()*students.length)];

		$(desks[d]).html(" " + randomStudents.firstName + " " + randomStudents.lastName);
	}

});


$(".clearRandomSeats").on("click", function(){

	for ( d=0; d<desks.length; d++) {

		$(desks[d]).html("");
	}
	
});


});

