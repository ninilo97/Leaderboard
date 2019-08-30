$(document).ready(function() {
	var list = [];
	var maxCall = 2000;
	var delayTime = 2000;
	var time=delayTime;

	$.ajax({
		url : 'fetchCards.lti',
		method : 'POST',
		contentType : 'application/json',
		success : function(response) {
			list=JSON.stringify(response);
			success(maxCall);
		}
	})
	
	function success(x){
		$.each(JSON.parse(list), function(idx, element) {
			setTimeout( function(){
			  $("#imageD").empty();
			  $("#imageD").append( "<img id='image' src='data:image/png;base64,"+element.image+"' alt='Img'>");
			  $("#title").text(element.title);
			  $("#name").text(element.name);
			  $("#desc").text(element.desc);
			}, time)
			time += delayTime;
		});
		if(!x) return;
		success(--x);
	}
})
