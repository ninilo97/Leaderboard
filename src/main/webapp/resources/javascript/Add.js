$(function() {
	
	$("#fromDate").change(checkDate);
	$("#toDate").change(checkDate);
	
	function checkDate(){
		fromDate = $("#fromDate").val();
		toDate = $("#toDate").val();
		if(fromDate=="" || toDate=="") return false;
		if(fromDate>toDate) $("#errorField").text("Invalid Date Range");
		else $("#errorField").text("");
	}
	
	$(".form").submit(function(evt) {
		evt.preventDefault();
	
		var obj = {
			name : $("#name").val(),
			title : $("#title").val(),
			desc : $("#description").val(),
			fromDate : $("#fromDate").val(),
			toDate : $("#toDate").val()
		}	
		alert(JSON.stringify(obj));
		$.ajax({
			url : 'addCard.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				alert(response);
				if (response == true) {
					$("#errorField").addClass("noerror");
					$("#errorField").text("Insertion Successful");
				}
				else{
					$("#errorField").removeClass("noerror");
					$("#errorField").text("Insertion failed. Try again later");
				}
			}
		})
	})
})