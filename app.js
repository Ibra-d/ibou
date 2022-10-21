gsap.from(".header__logo, li > a, .blocks__container", {
  duration: 2,
  delay: 2,
  opacity: 0,
  y: "200",
  stagger: 0.1,
  ease: Expo.easeInOut,
});

/* 
 Recupere tous les blocks 
 puis les animer une par une au survol
*/

const blocks = document.querySelectorAll(".block");

blocks.forEach((block /* index */) => {
  /*
Mouse Enter effect
*/

  block.addEventListener("mouseenter", function (e) {
    const cible = block.childNodes[5];

    gsap.to(cible, {
      delay: 0.5,
      top: "-20px",
      duration: 2,
      opacity: 1,
      ease: Elastic.easeOut,
    });

    gsap.from(".arrow", {
      delay: 1,
      duration: 2,
      rotation: 360,
      ease: Elastic.easeOut,
    });

    gsap.to("h1", {
      transform: "translate(0)",
      opacity: 1,
      duration: 2,
      delay: 0.7,
      ease: Elastic.easeOut,
    });
  });

  /*
  Mouse Leave effect
  */

  block.addEventListener("mouseleave", function () {
    const cible = block.childNodes[5];

    gsap.to(cible, {
      delay: 0,
      top: "150px",
      duration: 1.1,
      opacity: 0,
      ease: Elastic.easeOut,
    });

    gsap.fromTo(
      ".arrow",
      {
        duration: 1,
        rotation: 360,
        ease: Elastic.easeOut,
      },
      {
        rotation: 45,
      }
    );

    gsap.to("h1", {
      transform: "translateY(150px)",
      opacity: 0,
      delay: 0.1,
      duration: 2,
      ease: Elastic.easeInOut,
    });
  });
});

/* 
Locomotive scroll
*/

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal",
});

/*
Three Js
*/

// const scene = new THREE.Scene();

/*
Vanilla Js
*/
