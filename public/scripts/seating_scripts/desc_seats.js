$(document).ready (function() {

	var shuffle = function(a) {
		for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
		return a;
	};

	$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	       console.log(results[0].last_name);
	       console.log(results[0].last_name);
	       var fullNames = [];

	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +','+ results[d].first_name);
	    	}

	    	var randomShuff = shuffle(fullNames);

	    	$(".runRandomPart").on('click', function() {
				// if(i == randomShuff.length) i = 0;
				// return $('.main').html(randomShuff[i++]);
				console.log('========');
				console.log(randomShuff);
			});


		}
	});


});