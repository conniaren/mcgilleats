$(".heart").on('click touchstart', function(){
    $(this).toggleClass('animating');
  });
  
  
  $(".heart").on('animationend', function(){
    $(this).toggleClass('animating');
  });
