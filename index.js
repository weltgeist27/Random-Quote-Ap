$(document).ready(function() {

  $("#quote-button").click(function() {
    var randomColor = "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
    $(".wrapper, #quote-button").css("background-color", randomColor);
      $("div").css("color", randomColor);    
  });
  
  
  $("#quote-button").click(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(data) {
        var post = data.shift();
        $("#quote-body").html(post.content);
        $("#quote-author").text(post.title);
        
      },
      cache: false
    });
  });
  
  $("#tweet-button").click(function() {
    var url = "https://twitter.com/intent/tweet?text=" +  (document.getElementById("quote-body").textContent) + "&hashtags=quotes";
    window.open(url);
  });
   
});