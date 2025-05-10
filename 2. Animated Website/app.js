const main = document.querySelector("#main");
const image = document.querySelector("#page > img");

main.addEventListener("mousemove", (e) => {
    image.style.left = `${-e.clientX * 0.03}px`;
    image.style.top = `${-e.clientY * 0.03}px`;
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
