$(document).ready (function() {

var shuffle = function(a) {
	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
	return a;
};

var window.fullName = fullName;
var randomShuff = shuffle(fullName); 
var i = 0

console.log(randomShuff);

$(".runRandomPart").on('click', function() {

 //function activate() {
	if(i == randomShuff.length) i = 0;
	return $('.main').html(randomShuff[i++]);


	
});

$.ajax({
    url: "/api/students",
    dataType: 'json',
    success: function(results){
     
       console.log(results[0].last_name);

       	var arr = results;

       for (d=0; d<arr.length; d++) {
 			
 		fullName = arr[d].last_name + ", " + arr[d].first_name; 

      
    	}


	}


	});


});