// gsap.registerPlugin(ScrollTrigger);

function init() {
  //   gsap.to("#intro img", {
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: "#intro",
  //       start: "top top",
  //       end: "bottom center",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //toggle a class with scrolltrigger
  //   gsap.set("#project02", {
  //     scrollTrigger: {
  //       trigger: "#project02",
  //       start: "top bottom-=10%",
  //       //   end: "bottom center-=10%",
  //       toggleClass: "active",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //create a parallax effect
  //   const parallaxTl = gsap.timeline({
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".bcg-parallax",
  //       start: "top center+=50",
  //       end: "bottom center",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //   parallaxTl
  //     .from(".content-wrapper", { autoAlpha: 0, duration: 1 })
  //     .from(".bcg", { y: "-30%", duration: 3 }, 0);
  //create a pinned scroll effect
  //   gsap.to(["#intro h1", "#intro p"], {
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: "#intro .content",
  //       pin: true,
  //       start: "top top+=15",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  /* use toggleAction **/
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      yPercent: -25,
      scrollTrigger: {
        trigger: project.querySelector("img"),
        start: "top bottom-=30%",
        // toggleActions: "play none none reverse",
        scrub: true,
        markers: true,
      },
    });
  });
  //simulate pages
  //   gsap
  //     .timeline()
  //     .to(["#intro h1", "#intro p"], {
  //       //   opacity: 0,
  //       scrollTrigger: {
  //         trigger: ".content",
  //         pin: true,
  //         start: "top top+=290",
  //         //   end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //       },
  //     })
  //     .to("#intro", {
  //       scrollTrigger: {
  //         trigger: "#project01",
  //         pin: true,
  //         start: "top top",
  //         end: "bottom center+=100",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
}

window.addEventListener("load", function () {
  init();
});
