$(function() {
	$("#fromDate").change(checkDate);
	$("#toDate").change(checkDate);

	$("#imageD").on("click", function() {
		$("#imageO").trigger("click");
	})
	
	$("#imageO").change(function() {
		if ($("#imageO").val() == "") $("#imageD").val("Select Image");
		else $("#imageD").val($("#imageO").val().replace(/C:\\fakepath\\/i, '') + " is selected.");
	})
	
	$(':file').on('change', function () {
	  var file = this.files[0];
	  //1024 = 1kb
	  if (file.size > 1024*512) {
	    alert('Max upload size is 512kb');
	  }
	  // Also see .name, .type
	});


	function checkDate() {
		fromDate = $("#fromDate").val();
		toDate = $("#toDate").val();
		if (fromDate == "" || toDate == "")
			return false;
		if (fromDate > toDate)
			$("#errorField").text("Invalid Date Range");
		else
			$("#errorField").text("");
	}

	function fetchAllTitle() {
		$.ajax({
			url : 'fetchAllCard.lti',
			method : 'POST',
			contentType : 'application/json',
			success : function(response) {
				$('#titleList').empty();
				var list = JSON.stringify(response);
				$.each(JSON.parse(list), function(idx, element) {
					$("#titleList").append($('<option>').val(element.title));
				});
			}
		})
	}
	fetchAllTitle();

	$(".form").submit(function(evt) {
		evt.preventDefault();
		
		var formData = new FormData();
		formData.append('name', $("#name").val());
		formData.append('title', $("#title").val());
		formData.append('desc', $("#description").val()); 
		formData.append('fromDate', $("#fromDate").val()); 
		formData.append('toDate', $("#toDate").val()); 
		formData.append('image', $('#imageO').get(0).files[0]);
		
		var obj = {
			name : $("#name").val(),
			title : $("#title").val(),
			desc : $("#description").val(),
			fromDate : $("#fromDate").val(),
			toDate : $("#toDate").val(),
			image : $('form')[0]
		}
		$.ajax({
			url : 'addCard.lti',
			method : 'POST',
		    contentType: false,
		    processData: false,
			data : formData,
			success : function(response) {
				if (response == true) {
					fetchAllTitle();
					$("#name").val("");
					$("#title").val("");
					$("#description").val("");
					$("#fromDate").val("");
					$("#toDate").val("");
					$("#errorField").addClass("noerror");
					$("#errorField").text("Insertion Successful");
				} else {
					$("#errorField").removeClass("noerror");
					$("#errorField").text("Insertion failed. Try again later");
				}
			}
		})
	})
})