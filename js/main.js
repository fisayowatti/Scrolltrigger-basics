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
      end: "bottom center-=10%",
      toggleClass: "active",
      scrub: true,
      markers: true,
    },
  });
}

window.addEventListener("load", function () {
  init();
});
