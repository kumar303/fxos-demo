$(document).ready(function(){
    $.ajax({
      url: "http://search.twitter.com/search.json",
      dataType: 'jsonp',
      data: {rpp: 100,
             q: '#mozfest'},
      error: function() {
          console.error('jsonp failed');
      },
      // This might make things work as a package app. Also needs
      //
      //  "permissions": {
      //      "systemXHR": {}
      //   },
      //xhrFields: {mozSystem: true},
      success: function(data){
        for(var i=0;i<data.results.length;i++){
            $('#result').prepend('<div class="tweet">' +
               '<img src="'+data.results[i].profile_image_url+'" width="50" height="60"/>' +
               '<span id="tweetText">'+data.results[i].text+'</span>' +
               '</div>');
        }
      }
    });
});

console.log('loaded app');
