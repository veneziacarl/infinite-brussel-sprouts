$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height()  - 200) {

    $('a.more-sprouts').hide();

    // $('.more-sprouts').click(function(event){
    //   event.preventDefault();
      var updatePageNumber = function(){
        var $link = $('a.more-sprouts');
        var pageNumber = $link.attr('href').match(/\d+$/);
        $link.attr('href', '/tweets?page=' + (Number(pageNumber) + 1));
        return Number(pageNumber);
      };

      $.ajax({
        method: "GET",
        url: "/tweets.json",
        data: {page: updatePageNumber()},
        success: function(data){
          data.forEach(function(tweet){
            $('ul.tweets').append('<li class="tweet"><div class="body">' + tweet.text + '</div><div class="user">' + tweet.username + '</div></li>');
          });
        }
      });
    // });
  }
});
