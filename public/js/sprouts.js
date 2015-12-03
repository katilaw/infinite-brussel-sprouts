var pageNum = 2;

$( ".more-sprouts" ).click(function(event) {
  event.preventDefault();

  // pageNum += 1;

  var response = $.ajax({
    method: "GET",
    dataType: "JSON",
    url: "/tweets.json?page=" + pageNum++,
    // url: "/tweets.json",
    success: function( json ) {
      json.forEach(function( tweet ){
        $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text +"<div class='user'>" + tweet.username + "</div></li>");
        $(".more-sprouts").attr("href", ("/tweets?page=" + pageNum))
      });
    }

  });

});
