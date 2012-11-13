$(document).ready(function(){
    $.ajax({
      url: "http://search.twitter.com/search.json",
      dataType: 'jsonp',
      data: {rpp: 100,
             q: '#mozfest'},
      error: function() {
          console.error('jsonp failed');
      },
      // This might make things work as a package app.
      // The manifest also needs
      //  "permissions": {
      //      "systemXHR": {}
      //   },
      //xhrFields: {mozSystem: true},
      success: function(data){
        $('#load-progress').hide();
        for (var i=0; i < data.results.length; i++) {
            $('#result').prepend(
               '<li data-state="tagged" data-tag="A">' +
                 '<div class="tweet">' +
                   '<img src="'+data.results[i].profile_image_url+'">' +
                   '<dl><dt>' +
                     '<span id="tweetText">'+data.results[i].text+'</span>' +
                   '</dt></dl>' +
                 '</div>' +
               '</li>');
        }
      }
    });
});

console.log('loaded app');
