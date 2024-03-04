let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#main',
        start: '50% 80%',
        end: '70% 100%',
        markers: true,
        scrub: 1,
    },
});

tl.to('.textOver h1', {
    width: '100%',
});

tl.to('.textOver h2', {
    width: '100%',
    delay: '-.4',
});
