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


// const counters = document.querySelector(".count");
// const speed = 200;

// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = parseInt(+counter.getAttribute("data-target"));
//     const count = parseInt(+counter.innerText);
//     const increment = Math.trunc(target / speed);
//     console.log(increment);
//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount, 1);
//     } else {
//       count.innerText = target;
//     }
//   };
//   updateCount();
// });

$('.trust span').countTo();