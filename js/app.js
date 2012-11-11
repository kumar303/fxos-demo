$(document).ready(function(){
   $.getJSON("http://search.twitter.com/search.json?rpp=100&callback=?&q=%23mozfest",
       function(data){
        for(var i=0;i<data.results.length;i++){
            $('#result').prepend('<div class="tweet">' +
               '<img src="'+data.results[i].profile_image_url+'" width="50" height="60"/>' +
               '<span id="tweetText">'+data.results[i].text+'</span>' +
               '</div>');
        }
 });
});

console.log('loaded app');
