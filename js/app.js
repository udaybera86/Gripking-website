"use strict";

// <------------------- Smooth Scroll ---------------------->

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// <------------------- Home Section ---------------------->

document.querySelector('video').playbackRate = .95;

// <------------------- Section Four ---------------------->

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

// <-------------------- Counting Numbers -------------->

var counted = 0;
$(window).scroll(function () {
    var oTop = $('.trust').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
            counted = 1;
        }
    });
    
// <-------------------- Home Product Slider -------------->

var slideIndex = 1;

function showImage(n) { // for Display the first Image

    'use strict';

    var slide = document.getElementsByClassName('slide-image'),

        // dots = document.getElementsByClassName('dots'),

        i;

    if (n > slide.length) { // to prevent larger values than the slide length

        slideIndex = 1;
    }

    if (n < 1) { // to avoide negative values

        slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++) { // to make other images dispaly: none

        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';

    // for (i = 0; i < dots.length; i++) { // to remove the active class from other dots

    //     dots[i].className = dots[i].className.replace(' active', '');
    // }

    // dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function plusIndex(n) { // for Next & Prev Actions
    'use strict';

    showImage(slideIndex += n);
}

function currentSlide(n) { // for Slide Bullets Selection

    'use strict';

    showImage(slideIndex = n);
}
