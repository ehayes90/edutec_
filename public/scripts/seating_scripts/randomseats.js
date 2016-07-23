$(document).ready (function() {

	var shuffle = function(a) {
		for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
		return a;
	};

var desks = [
		$("#randStuD1"),
		$("#randStuD2"),
		$("#randStuD3"),
		$("#randStuD4"),
		$("#randStuD5"),
		$("#randStuD6"),
		$("#randStuD7"),
		$("#randStuD8"),
		$("#randStuD9"),
		$("#randStuD10"),
		$("#randStuD11"),
		$("#randStuD12"),
		$("#randStuD13"),
		$("#randStuD14"),
		$("#randStuD15"),
		$("#randStuD16"),
		$("#randStuD17"),
		$("#randStuD18"),
		$("#randStuD19"),
		$("#randStuD20"),
		$("#randStuD21"),
		$("#randStuD22"),
		$("#randStuD23"),
		$("#randStuD24"),
		$("#randStuD25"),
		$("#randStuD26"),
		$("#randStuD27"),
		$("#randStuD28"),
		$("#randStuD29"),
		$("#randStuD30")
	];

	$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name);
	    	}

	    	var randomShuff = shuffle(fullNames);
	    	var i = 0;

	    	$(".runRandomSeats").on('click', function() {


		for (var d=e=0; d<desks.length && e<randomShuff.length; d++, e++) {
	 	$(desks[d].html(randomShuff[e]));
	 	// console.log(desks[d]);
	 	// console.log(fullNames[e]);
	 	//$("#ascStuD19").html('carlos');
	 	}//for desks loop
			});


		}
	});

	$(".clearRandomSeats").on("click", function(){

		for ( d=0; d<desks.length; d++) {

			$(desks[d]).html("");
		}
		
	});

	// 	$(".clearRandomSeats").on('click', function() {

	//     location.reload();
	//     $('.main').empty();
	// });

$("#tdesk1").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk2").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk3").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk4").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk5").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk6").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk7").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk8").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk9").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk10").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk11").on('click', function() {
$( this ).toggleClass('green-bg');
});

$("#tdesk12").on('click', function() {
$( this ).toggleClass('green-bg');
});

});