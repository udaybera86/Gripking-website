"use strict";

// <------------------- Home Section ---------------------->

document.querySelector('video').playbackRate = .95;

// <------------------- Section Four ---------------------->

// $(document).ready(function () {
//   $("#testimonial-slider").owlCarousel({
//     items: 2,
//     itemsDesktop: [1000, 2],
//     itemsDesktopSmall: [980, 1],
//     itemsTablet: [768, 1],
//     pagination: true,
//     // navigation:true,
//     // navigationText:["<",">"],
//     autoPlay: true
//   });
// });


// <-------------------- Dropdown menu hover -------------->

$("#product").mouseover(function () {
    $(".dropdown-container").slideDown(800);
});

$(".dropdown-container").mouseleave(function () {
    $(".dropdown-container").slideUp(800);
});

$("#codeofconduct").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});

$("#about").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});