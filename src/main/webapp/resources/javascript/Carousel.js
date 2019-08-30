$(document).ready(function() {
	$('#go-left').hide()

	$(".slider").diyslider({
		width : "100%", // width of the slider
		height : "100%", // height of the slider
		display : 1, // number of slides you want it to display at once
		loop : false
	// disable looping on slides
	}).bind("moved.diyslider", function(event, slide, slideNumber) {

		if (slideNumber > 1)
			$('#go-left').show();
		else
			$('#go-left').hide();

		if (slideNumber < 5)
			$('#go-right').show();
		else
			$('#go-right').hide();

	})

	// use buttons to change slide
	$("#go-left").bind("click", function() {
		// Go to the previous slide
		$(".slider").diyslider("move", "back");
	});
	$("#go-right").bind("click", function() {
		// Go to the previous slide
		$(".slider").diyslider("move", "forth");
	});
})