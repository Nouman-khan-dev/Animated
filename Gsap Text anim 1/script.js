const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '15% 50%',
        end: '120% 20%',
        markers: true,
        scrub: 1,
        markers: true,
    },
});
tl.to('.text-area2 h1', {
    width: '100%',
    // markers: true,
    // delay: 1,
});
tl.to('.text-area2 h2', {
    width: '100%',
    delay: -0.4,
});
