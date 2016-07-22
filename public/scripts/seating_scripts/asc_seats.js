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

$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name + "&nbsp &nbsp");
	    } //for fullNames.push

	   $('#g2').on('click', function(){
				var chunk = 2;
				activate(chunk);
				console.log("I'm a genius");
	}); 

	}//results

	    });//ajax

});	//document