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

    // --------------(For Product Images)-----------------
    
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

// --------------(For Product Content)-----------------

const slides = document.getElementsByClassName("slide"); // this selection is a live collection; any changes in DOM is updated in the variable unlike querySelectors
const btnLeft = document.querySelector(`#up-btn`);
const btnRight = document.querySelector(`#down-btn`);

let currentSlideIndex = 0;
let lastSlideIndex = slides.length - 1;

// go to a slide;
function goToSlide(slideIndex) {
    [...slides].forEach((s, i) => {
        s.style.transform = `translateY(${110 * (i - slideIndex)}%)`
    })
    currentSlideIndex = slideIndex;
}
goToSlide(currentSlideIndex);

// make ready the next slide if current slide is the first or the last slide
function readyNextSlide() {
    // if currentSlide is the last slide, shift the first slide to the end
    if (currentSlideIndex === lastSlideIndex) {
        slides[lastSlideIndex].insertAdjacentElement("afterend", slides[0]);
        slides[lastSlideIndex].style.transform = `translateY(${110}%)`;
        currentSlideIndex--; //this is because current slide is now the second last slide
    }
    // if currentSlide is the first slide, shift the last slide to the beginning
    if (currentSlideIndex === 0) {
        slides[0].insertAdjacentElement("beforebegin", slides[lastSlideIndex]);
        slides[0].style.transform = `translateY(-${110}%)`;
        currentSlideIndex++; //this is because current slide is now the second slide
    }
}

// put the last slide in the beginning; ('if' condition is not necessary but providing if condition is future proof if user sets the initial slide to be shown as the last slide )
if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();

// shift all slides left or right based on direction provided
function shiftSlides(direction) {
    direction ? currentSlideIndex++ : currentSlideIndex--
    if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();
    goToSlide(currentSlideIndex);
}

//button click events
btnRight.addEventListener("click", shiftSlides.bind(null, 1));
btnLeft.addEventListener("click", shiftSlides.bind(null, 0));





// function sethovereffect(){
//     state = document.getElementsByClassName("state")
//     state[0].style.border ="1px solid #FED51B"
// }