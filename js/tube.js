$(function() {
 
 $('.search-results').hide();

 //----Global Variables-------//
 var myData = '';
 var searchTerm = '';
 var videoID = '';
 var videoTitle = '';
 var videoThumb = '';
 var videoAuthor = ''
 var videoURL = '';


//----EVENTS-------//
$('#submit-btn').click(function() {
	$('.search-results').empty(); //this clears the results div each time so that the videos don't all add together
	searchTerm = $('#query').val();//grabs user's input
	getResults();

});


//----FUNCTION definitions---//


function getResults(data) {

var params = { part: 'snippet', type: 'video', q: searchTerm, order: 'viewCount', relevanceLanguage: 'en', maxResults: '10', fields: 'items(id(videoId), snippet(title, channelTitle, thumbnails))', key: 'AIzaSyABTE4fBQBAXSrX18w3QPt4zhNBZPrWuyY' }; // a JS object containing name:value pairs
var url = 'https://www.googleapis.com/youtube/v3/search?';

$.getJSON(url, params, function(data) {
			myData = data.items; //the array returned by the search
			//console.log(myData[0]);
			loopAndParse();

	});
}

function loopAndParse(data) {
	for (var i=0; i < 10; i++) {
		videoID = myData[i].id.videoId;
		videoTitle = myData[i].snippet.title;
		videoAuthor = myData[i].snippet.channelTitle;
		videoThumb = myData[i].snippet.thumbnails.default.url;
		showResults();
	}
}

function showResults(data) {
	
	$('.search-results').show();
	var html = '<ul>';
	
    html += '<a href="https://www.youtube.com/watch?v='+videoID+'"'+' class="video-link"><li class="video-list-item"><div class="video-img"><img src="'+videoThumb+'"></div><div class="video-description"><span style="font-weight:bold;">'+videoTitle+'</span><br />Posted by: '+videoAuthor+'</div></li></a>';
	html += '</ul>';

	$('.search-results').append(html);

}


}) //end document ready

