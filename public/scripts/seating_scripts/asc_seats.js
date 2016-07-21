$(document).ready (function() {


	console.log(fullName);

	$.getJSON('http://localhost:8080/api/students', function(rosterData) {

		var jsonRoster = JSON.stringify(rosterData);

		//console.log(jsonRoster);


		var arr = JSON.parse(jsonRoster);


 			//console.log(arr[0].last_name + ", " + arr[0].first_name);

 			for (d=0; d<arr.length; d++) {
 			
 			fullName = arr[d].last_name + ", " + arr[d].first_name;

 		
 			}
 			

		


	});

	

});