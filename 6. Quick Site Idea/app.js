const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

const images = [
    "https://images.unsplash.com/photo-1747285726356-535557675eda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1747633321007-d2651a177506?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1747515203898-2df8f083f417?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentImageIndex = 0;
const bgImageEl = document.getElementById("bg-image");

function cycleBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    bgImageEl.src = images[currentImageIndex];
}

images.forEach(src => {
    const img = new Image();
    img.src = src;
});

const overlayTl = gsap.timeline({
    repeat: -1,
    onRepeat: cycleBackground
});

overlayTl
    .to(".overlay", {
        delay: 2,
        top: 0,
        duration: 0.5,
        ease: "power2.inOut"
    })
    .to(".overlay", {
        top: "-100%",
        duration: 0.5,
        ease: "power2.inOut"
    })
    .set(".overlay", {
        top: "100%",
        delay: 2
    });

document.querySelectorAll(".elem").forEach((elem, i) => {
    const h1 = elem.querySelector("h1");
    const h5 = elem.querySelector("h5");

    gsap.to(h1, {
        x: i % 2 === 0 ? -30 : 200,
        scrollTrigger: {
            trigger: elem,
            scroller: "#main",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });

    gsap.to(h5, {
        x: i % 2 === 0 ? 200 : -200,
        scrollTrigger: {
            trigger: elem,
            scroller: "#main",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
});

gsap.to("#bg", {
    opacity: 0.5,
    scrollTrigger: {
        trigger: "#bg",
        scroller: "#main",
        start: "top -5%",
        end: "top -90%",
        scrub: 1
    }
});

const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

const cursor = document.getElementById("cursor");
let mouseX = 0, mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

gsap.ticker.add(() => {
    gsap.set(cursor, {
        x: mouseX,
        y: mouseY
    });
});
