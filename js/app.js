// "use strict";

document.querySelector('video').playbackRate = .95;

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    // navigation:true,
    // navigationText:["<",">"],
    autoPlay: true
  });
});


// <--- Dropdown menu hover --->
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