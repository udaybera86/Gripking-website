"use strict";

document.querySelector('video').playbackRate = .95;
<<<<<<< Updated upstream
// "use strict";

// function carousel() {
//   let carouselSlider = document.querySelector(".carousel__slider");
//   let list = document.querySelector(".carousel__list");
//   let item = document.querySelectorAll(".carousel__item");
//   let list2;

//   const speed = 1;

//   const width = list.offsetWidth;
//   let x = 0;
//   let x2 = width;

//   function clone() {
//     list2 = list.cloneNode(true);
//     carouselSlider.appendChild(list2);
//     list2.style.left = `${width}px`;
//   }

//   function moveFirst() {
//     x -= speed;

//     if (width >= Math.abs(x)) {
//       list.style.left = `${x}px`;
//     } else {
//       x = width;
//     }
//   }

//   function moveSecond() {
//     x2 -= speed;

//     if (list2.offsetWidth >= Math.abs(x2)) {
//       list2.style.left = `${x2}px`;
//     } else {
//       x2 = width;
//     }
//   }

//   function hover() {
//     clearInterval(a);
//     clearInterval(b);
//   }

//   function unhover() {
//     a = setInterval(moveFirst, 1);
//     b = setInterval(moveSecond, 1);
//   }

//   clone();

//   let a = setInterval(moveFirst, 1);
//   let b = setInterval(moveSecond, 1);

//   carouselSlider.addEventListener("mouseenter", hover);
//   carouselSlider.addEventListener("mouseleave", unhover);
// }

// carousel();

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

$("#product").mouseover(function(){
  $(".dropdown-container").slideDown();
});

$(".dropdown-container").mouseover(function(){
  $(".dropdown-container").slideDown();
});

$(".dropdown-container").mouseleave(function(){
  $(".dropdown-container").slideUp(10);
});

$("#product").mouseleave(function(){
   $(".dropdown-container").slideUp(10);
});