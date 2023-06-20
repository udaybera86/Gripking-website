"use strict";

// <------------------- Pre-loader Start ---------------------->

let loader = document.getElementById("loader");
window.onload = function () {
    loader.style.display = 'none';
}

// <------------------- Pre-loader End ---------------------->

// <----------------------------------- Dropdown menu hover Start ----------------------------------------->

$("#product").mouseover(function () {
    $(".dropdown-container").slideDown(800);
});

$(".dropdown-container").mouseleave(function () {
    $(".dropdown-container").slideUp(800);
});

$("#FAQS").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});

$("#about").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});

// <--------------------------------- Dropdown menu hover End ----------------------------------------------->

// <------------------- Smooth Scroll Start ---------------------->

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// <------------------------------ Smooth Scroll End ------------------------------------------------------>

// <-------------------- Counting Numbers Start -------------->

let counted = 0;
$(window).scroll(function () {
    let oTop = $('.counting_num').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        // alert('finished');
                    }
                });
        });
        counted = 1;
    }
});

// <-------------------- Counting Numbers End -------------->

// <-------------------- About Popup Box Start -------------->

const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     //  const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     //  popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle("open");
}

// <-------------------- About Popup Box End -------------->

// <--------------------------------- Home Section -------------------------------------------------------->

document.querySelector('video').playbackRate = .95;



