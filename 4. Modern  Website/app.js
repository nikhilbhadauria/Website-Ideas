var tl = gsap.timeline();

tl.from("#right", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
    .from(".hvr1", {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "bounce.out"
    }, "-=0.5") 
    .from(".hvr2", {
        y: -300,
        rotate: "45deg",
        opacity: 0,
        duration: 2,
        ease: "bounce.out"
    }, "-=1.5") 
    .from(".hvr3", {
        x: 200,
        opacity: 0,
        duration: 2,
        ease: "bounce.out"
    }, "-=1.5");

gsap.from(".fheading h1", {
    scrollTrigger: {
        trigger: ".fheading h1",
        start: "top 60%",
        end: "top 80%",
        scrub: 2
    },
    y: 50,
    opacity: 0,
    ease: "power3.in"
});

gsap.from("#fimages", {
    scrollTrigger: {
        trigger: "#fimages",
        start: "top 60%",
        end: "top 80%",
        scrub: 2
    },
    y: 50,
    opacity: 0,
    ease: "power3.in"
});

gsap.from("#dev", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#dev",
        start: "top 70%",
        end: "top 80%",
    }
});

gsap.from("#slides", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#slides",
        start: "top 70%",
        end: "top 80%",
    }
});
