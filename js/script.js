$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });


});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('navfixed');
         $('.products').addClass('stayopen');
    } else {
        $('.navbar').removeClass('navfixed');
        $('.products').removeClass('stayopen');
    }
});
