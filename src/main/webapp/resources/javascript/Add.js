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
})