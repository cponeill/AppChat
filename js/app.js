var parseAppID	  = "Wx6KuinGl8mEZaMPRKsGRq26YakSLDtB3yw1Twr4";
var parseRESTKey  = "aposY0TO7lCZeasXrp71GbejR9lDJ8TJ2x8D6Ggr";

$(document).ready(function(){
	getMessages();
	$("#send").click(function(){
		var username = $("input[name=username]").attr('value');
		var message = $("input[name=message]").attr('value');
		console.log(username)
		console.log("!")
		$.ajax({
			url: " https://api.parse.com/1/classes/MessageBoard",
			headers: {
				"X-Parse-Application-Id": parseAppID,
				"X-Parse-REST-API-Key": parseRESTKey
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data: JSON.stringify({
				"username": username,
				"message": message
			}),
			type: 'POST',
			success: function() {
				console.log("sent");
				getMessages();
			},
			error: function() {
				console.log("error");
			}
		});

	});
})
function getMessages() {
	$.ajax({
		url: " https://api.parse.com/1/classes/MessageBoard",
		headers: {
			"X-Parse-Application-Id": parseAppID,
			"X-Parse-REST-API-Key": parseRESTKey
		},
		contentType: "application/json",
		dataType: "json",
		type: 'GET',
		success: function(data) {
			console.log("get");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}
function getMessages() {
	$.ajax({
		url: " https://api.parse.com/1/classes/MessageBoard",
		headers: {
			"X-Parse-Application-Id": parseAppID,
			"X-Parse-REST-API-Key": parseRESTKey
		},
		contentType: "application/json",
		dataType: "json",
		type: 'PUT',
		success: function(data) {
			console.log("put");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}
function getMessages() {
	$.ajax({
		url: " https://api.parse.com/1/classes/MessageBoard",
		headers: {
			"X-Parse-Application-Id": parseAppID,
			"X-Parse-REST-API-Key": parseRESTKey
		},
		contentType: "application/json",
		dataType: "json",
		type: 'DELETE',
		success: function(data) {
			console.log("delete");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateView(messages) {	
	var table=$(".table tbody");
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl=$('<tr><td>'+value.username+'</td><td>'+value.message+'</td></tr>');		
		table.append(trEl);		
	});

	console.log(messages);
}