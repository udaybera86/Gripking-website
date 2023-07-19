var tl = gsap.timeline();

gsap.from('.navbar', {
    y: -30,
    opacity: 0,
    duration: 1.4,
    delay: 0.5,
})

gsap.from('.sml_navbar', {
    y: -30,
    opacity: 0,
    duration: 1.3,
    delay: 0.5,
})

tl.from('#hero_text', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.6
})

tl.from('.hero-des', {
    x: -100,
    opacity: 0,
    duration: 1.2,
    delay: -0.9,
})

tl.from('.hero-vector img:nth-child(2)', {
    y: -50,
    opacity: 0,
    duration: 1.4,
    delay: -1.3,
})

tl.from('.hero-vector img:nth-child(1)', {
    y: 50,
    opacity: 0,
    duration: 1.4,
    delay: -1.3,
})