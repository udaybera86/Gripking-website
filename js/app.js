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

