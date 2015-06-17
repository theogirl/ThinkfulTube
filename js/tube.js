$(function() {
 
 var myData = '';
 var searchTerm = '';


//----EVENTS-------//
$('#submit-btn').click(function() {
	$('.search-results').empty();
	searchTerm = $('#query').val();
	getResults();
});



//----FUNCTION definitions---//
function showResults(data) {
	$.each(myData, function(index, value) { 
		$('.search-results').append(value.Title + '<br />');
	})
}

function getResults(data) {

var params = { s: searchTerm, r: 'json' }; // a JS object containing name:value pairs
var url = 'http://www.omdbapi.com';
	$.getJSON(url, params, function(data) {
			myData = data.Search;
			showResults();
	});
}


}) //end document ready