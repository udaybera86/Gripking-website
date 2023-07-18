// <-------------------- Dropdown menu hover -------------->

$("#product").mouseover(function () {
    $(".dropdown-container").slideDown(800);
});

$(".dropdown-container").mouseleave(function () {
    $(".dropdown-container").slideUp(800);
});

$("#product").mouseleave(function () {
    $(".dropdown-container").slideUp(800);
});

$("#FAQS").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});

$("#about").mouseover(function () {
    $(".dropdown-container").slideUp(800);
});