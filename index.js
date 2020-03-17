$(document).ready( async function() {
    
    //Page navigation
    $("header").on("click", function() {
      $('html, body').animate({
          scrollTop: $("r").offset().top
      }, 800);
  });
  //Move title to header after 1st viewport
  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 500) {
        $("#header").fadeIn();
      } else {
        $("#header").fadeOut();
      }
    });

});