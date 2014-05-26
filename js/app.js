var parseAppID 		  = "Wx6KuinGl8mEZaMPRKsGRq26YakSLDtB3yw1Twr4";
var parseRestID       = "aposY0TO7lCZeasXrp71GbejR9lDJ8TJ2x8D6Ggr";

$(documet).ready(function(){
	getMessages();
	$('#send').click(function(){
		var username = $('input[name=username]'.attr('value'));
		var message  = $('input[name=message]'.attr('value'));
		console.log(username);
		console.log(message);
		$.ajax({
			url: "https://api.parse.com/1/classes/MessageBoard",
			headers: {
				'X-Parse-Application-ID': parseAppID,
				'X-Parse-REST-API-KEY'  : parseRestID
			},
			contentType: 'application/json',
			dataType:    'json',
			processData: false,
			data: JSON.stringify({
				'username': username,
				'message' : message
			}),
			type: 'POST',
			success: function(){
				console.log('sent');
				getMessages();
			},
			error:function(){
				console.log('error');
			}
		});
	});
})

function getMessages() {
	$.ajax({
		url: "https://api.parse.com/1/classes/MessageBoard",
		headers: {
			'X-Parse-Application-ID': parseAppID,
			'X-Parse-REST-API-KEY'  : parseRestID
		},
		contentType: 'application/json',
		dataType: 'json',
		type: 'GET',
		success: function(data){
			console.log('get');
			updateView(data);
		},
		error: function(){
			console.log('error');
		}
	});
}

function updateView(messages) {
	var table = $('.table tbody');
	table.html('');
	$.each(messages.results, function(index, value){
		var trEl = $('<tr><td>' + value.username + '</td><td>' + value.message + '</td></tr>');
		table.append(trEl);
	});
	console.log(messages);
}