$("#product").mouseover(function () {
    $(".dropdown-container").slideDown(1500);
  });
  
  // $(".dropdown-container").mouseover(function () {
  //   // $(".dropdown-container").slideDown();
  //   // $(".dropdown-container").
  // });
  
  $(".dropdown-container").mouseleave(function () {
    $(".dropdown-container").fadeOut(800);
  });
  
  // $("#product").mouseleave(function () {
  //   $(".dropdown-container").slideUp(10);
  // });
  