$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });


});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 250) {
        $('.fixnav').addClass('navfixed');
        $('.products').addClass('stayopen');
    
    } else {
        $('.fixnav').removeClass('navfixed');
        $('.products').removeClass('stayopen');
 
    }
});
