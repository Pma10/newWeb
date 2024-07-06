gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
    gsap.to(".main-img, .main-subtitle", {
        duration: 1,
        rotation: 5,
        ease: "power1.inOut",
        yoyo: true,
        scale: 1,
        opacity: 1
    });
    gsap.to(".main-img, .main-subtitle", {
        duration: 1,
        rotation: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none", 
            scrub: false
        },
        y: 80,
        opacity: 1,
        duration: 1 
    });
    gsap.from(".skill-content", {
        scrollTrigger: {
            trigger: ".skill-content",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none", 
            scrub: false
        },
        y: 30,
        opacity: 1,
        duration: 1 
    });
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill-li",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
            scrub: false
        }
    });
    
    tl.from(".skill-li img", {
        y : -100,
        opacity: 0,
        duration: 2
    })
    .to(".skill-li img", {
        scale: 2,
        y: 20,
        duration: 1
    });
});