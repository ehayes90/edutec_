$(document).ready (function() {


var roster = [
	"Barry Allen",
	"Bruce Banner",
	"Clint Barton",
	"Arthur Curry",
	"Bobby Drake",
	"Ben Grimm",
	"Clark Kent", 
	"Scott Lang",
	"Lex Luthor",
	"Pietro Maximoff",
	"Wanda Maximoff",
	"Matt Murdock",
	"Edward Nigma",
	"Otto Octavius",
	"Norman Osborn",
	"Peter Parker",
	"Kitty Pride",
	"Diana Prince",
	"Harley Quinn",
	"Peter Rasputin",
	"Reed Richards",
	"Steve Rogers",
	"Natasha Romanoff", 
	"Tony Stark",
	"Victor Stone", 
	"Johnny Storm", 
	"Susan Storm",
	"Jennifer Walters",
	"Bruce Wayne", 
	"Wade Wilson"
	
];



var shuffle = function(a) {
	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
	return a;
};
var randomShuff = shuffle(roster); 
var i = 0

$(".runRandomPart").on('click', function() {

 //function activate() {
	if(i == randomShuff.length) i = 0;
	return $('.main').html(randomShuff[i++]);
	
	
});

$(".clearRandomPart").on('click', function() {

$('.main').empty();

});

});


