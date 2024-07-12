gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
    gsap.from(".main-img", {
        duration: 1, 
        x: "-100%",
        ease: "power1.out",
    });

    gsap.from(".main-title", {
        duration: 1, 
        opacity: 0, 
        ease: "power1.inOut",
        delay: 0.3,
    });
    gsap.from(".chez-invite", {
        duration: 5,
        opacity: 1,
        y: 40,
        ease: "power3.out",
        delay: 1,
    });
});