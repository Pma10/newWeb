gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
    // 메인 이미지와 서브타이틀에 대한 초기 애니메이션 설정
    gsap.to(".main-img, .main-subtitle", {
        duration: 1,
        scale: 1,
        rotation: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });

    // about-content에 대한 스크롤 트리거 설정
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top bottom", // .about-content가 뷰포트의 하단에 닿을 때 시작
            end: "bottom top", // .about-content가 뷰포트의 상단을 지날 때 끝
            toggleActions: "play none none none", // 트리거 상태에 따라 애니메이션 실행
            scrub: false // 스크롤에 따라 애니메이션 조정 비활성화
        },
        y: 80, // 아래로 80px 이동
        opacity: 0, // 투명도 0에서 시작하여 점점 나타나게 함
        duration: 1 // 애니메이션 지속 시간
    });

});
