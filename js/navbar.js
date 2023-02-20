$("#product").mouseover(function () {
    $(".dropdown-container").slideDown();
  });
  
  $(".dropdown-container").mouseover(function () {
    $(".dropdown-container").slideDown();
  });
  
  $(".dropdown-container").mouseleave(function () {
    $(".dropdown-container").slideUp(10);
  });
  
  $("#product").mouseleave(function () {
    $(".dropdown-container").slideUp(10);
  });
  