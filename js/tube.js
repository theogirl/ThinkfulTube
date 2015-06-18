$(function() {
 
 var myData = '';
 var searchTerm = '';
 var videoID = '';
 var videoTitle = '';
 var videoThumb = '';
 var videoURL = '';


//----EVENTS-------//
$('#submit-btn').click(function() {
	$('.search-results').empty();
	searchTerm = $('#query').val();
	getResults();
});



//----FUNCTION definitions---//


function getResults(data) {

var params = { part: 'snippet', type: 'video', q: searchTerm, order: 'rating', relevanceLanguage: 'en', maxResults: '1', key: 'AIzaSyABTE4fBQBAXSrX18w3QPt4zhNBZPrWuyY' }; // a JS object containing name:value pairs
var url = 'https://www.googleapis.com/youtube/v3/search?';
	$.getJSON(url, params, function(data) {
			myData = data.items; //the array returned by the search
			//console.log(myData[0]);
			videoID = myData[0].id.videoId;
			videoTitle = myData[0].snippet.title;
			videoThumb = myData[0].snippet.thumbnails.default.url;
			showResults();
	});
}

function showResults(data) {
	var html = '<ul>';
	
    html += '<a href="https://www.youtube.com/watch?v='+videoID+'"'+' class="video-link"><li class="video-list-item"><div class="video-img"><img src="'+videoThumb+'"></div><div class="video-description">'+videoTitle+'</div></li></a>';
	html += '</ul>';

	$('.search-results').append(html);


	//$('.search-list').append('<a href="https://www.youtube.com/watch?v='+videoID+'"'+' class="video-link"><li class="video-list-item"><div class="video-img"><img src="'+videoThumb+'"></div><div class="video-description">'+videoTitle+'</div></li></a>');

}


}) //end document ready

