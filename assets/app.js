
$(document).ready(function() {
    $(".accordion .accord-header").click(function() {
      
      $('.accord-header').removeClass('on');
      $(this).addClass('on');
      
      
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp(400);
        $(this).removeClass('on');
      } else {
        $(".accordion .accord-content").slideUp(400);
        $(this).next("div").slideToggle(400);
      }
   });
 });