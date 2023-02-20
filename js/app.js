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
  $(".dropdown-container").slideDown();
  // $(".dropdown-container").css("display", "block");
});

$(".dropdown-container").mouseover(function () {
  $(".dropdown-container").slideDown();
});

$(".dropdown-container").mouseleave(function () {
  $(".dropdown-container").slideUp();
});

$("#product").mouseleave(function () {
  $(".dropdown-container").slideUp();
  // $(".dropdown-container").css("display", "none");
});



// $(function() {
//   // Dropdown toggle
//   $('#product').mouseenter(function(){
//     $('.dropdown-container').animate({
//       top: '200px'
//     }, 'slow');
//   });

//   $('#product').mouseleave(function(){
//     $('.dropdown-container').animate({
//       top: '-200px'
//     }, 'slow');
//   });

//   // $(document).mouse(function(e) {
//   //   var target = e.target;
//   //   if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
//   //     $('.dropdown').toggle(function() {
//   //     $('.dropdown').stop().animate({
//   //       top: '-100px'
//   //     }, 'slow');
//   //   });
//   //   }
//   // });
// });

// var dropdownToggle = $('#product');
// var dropdown = dropdownToggle.next('.dropdown-container');
// $(function() {
//   dropdown.slideUp(0);
//   $(document).on('mouseenter', function(e) {
//     var target = e.target;
//     if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
//       if (dropdown.is(':visible')) {
//         dropdown.stop(true).slideUp();
//       }
//     }
//   });
//   dropdownToggle.on('mouseleave', function() {
//     dropdown.stop(true).slideToggle();
//   });
// });


// $( "#product" ).to(function() {
//   $( ".dropdown-container").slideDown( "slow", function() {
//     // Animation complete.
//   });
// });


  // $(document).ready(function () {

  //   $(".product").click(function () {
  //     $(".dropdown-container").slideUp(1500);
  //   });

  //   $(".product").click(function () {
  //     $(".dropdown-container").slideDown(1500);
  //   });

  //   $(".product").click(function () {
  //     $(".dropdown-container").slideToggle(1500);
  //   });


//   $('#product').hover(function () {
//     // over
//     $(".dropdown-container").slideDown(1500);

//   }, function () {
//     // out
//   }
//   );
// });

// $(function () {
//   $("#product").on("click", function () {
//     $(".dropdown-container").animate({ top: "200px" });
//   });
// });