// <--------------------------------- Home Product Slider Start --------------------------------------------->

// --------------(For Product Images)-----------------


let slideIndex = 1;

function showImage(n) { // for Display the first Image
    'use strict';
    let slide = document.getElementsByClassName('slide-image'),

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

// <-------------------- Home Product Slider End -------------->

// <--------------------------------- Review Slider Start --------------------------------------------------->

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

// <--------------------------------- Review Slider End ----------------------------------------------------->
