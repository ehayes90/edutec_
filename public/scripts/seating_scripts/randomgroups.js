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

function Shuffle(a) {
	for(var j, x, i = a.length; //var j = 0; //variables
		i; //j < a.length; //condition - it's going to run while it's true
		j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x); //j++ - it's going to increment by that
	return a;
};

var randomShuff = Shuffle(roster); 
var i = 0
console.log(randomShuff);

var createRosterGroups = function (arr, chunkSize) {
    var groups = [], i;
    chunkSize = parseInt(chunkSize)
    for (i = 0; i < roster.length; i += chunkSize) {
        groups.push(roster.slice(i, i + chunkSize));
    }

    return groups;

}

$('#g2').on('click', function(){
	var chunk = 2;
	activate(chunk);
});
$('#g3').on('click', function(){
	var chunk = 3;
	activate(chunk);
});
$('#g4').on('click', function(){
	var chunk = 4;
	activate(chunk);
});
$('#g5').on('click', function(){
	var chunk = 5;
	activate(chunk);
});
$('#g6').on('click', function(){
	var chunk = 6;
	activate(chunk);

});



function activate(chunkSize) {

	var groupedArray = createRosterGroups(randomShuff, chunkSize);

	for (var d = 0; d < groupedArray.length; d++){
		console.log("each array " + groupedArray[d]); //each array in list
		for (var x = 0; x < groupedArray[d].length; x++) {
			console.log("each member " + groupedArray[d][x]); // each member in array
			
		}

	 return $('.main').html(groupedArray.join('<br><br>'));

	}
}

$(".clearRandomGroups").on('click', function() {

    location.reload();
    //$('.main').empty();
});

});






