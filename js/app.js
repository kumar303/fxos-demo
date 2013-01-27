$(document).ready(function() {
    var links = /(http:\/\/[^\s]+)/gi;
    $.ajax({
      url: "http://search.twitter.com/search.json",
      dataType: 'jsonp',
      data: {rpp: 100,
             q: '#FirefoxOS'},
      error: function() {
          console.error('jsonp failed');
      },
      //
      // To make this work as a package app, you need to add
      // this parameter to the xhr:
      //
      //xhrFields: {mozSystem: true},
      //
      // You also need to add this permission to your manifest:
      //
      //  "permissions": {
      //      "systemXHR": {}
      //   },
      //
      success: function(data) {
        var body;
        $('#load-progress').hide();
        for (var i=0; i < data.results.length; i++) {
            body = data.results[i].text;
            body += ' ';  // terrible hack to make the HTML regex easier.
            body = body.replace(links, '<a target="_blank" href="$1">$1</a>');
            $('#result').prepend(
               '<li data-state="tagged" data-tag="A">' +
                 '<div class="tweet">' +
                   '<img src="'+data.results[i].profile_image_url+'">' +
                   '<dl><dt>' +
                     '<span id="tweetText">'+body+'</span>' +
                   '</dt></dl>' +
                 '</div>' +
               '</li>');
        }
      }
    });
});

console.log('loaded app');
