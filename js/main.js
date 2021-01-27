// gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.to("#intro img", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  //toggle a class with scrolltrigger
  gsap.set("#project02", {
    scrollTrigger: {
      trigger: "#project02",
      start: "top bottom-=10%",
      //   end: "bottom center-=10%",
      toggleClass: "active",
      scrub: true,
      markers: true,
    },
  });

  //create a parallax effect
  const parallaxTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: "top center+=50",
      end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  parallaxTl
    .from(".content-wrapper", { autoAlpha: 0, duration: 1 })
    .from(".bcg", { y: "-30%", duration: 3 }, 0);
}

window.addEventListener("load", function () {
  init();
});
