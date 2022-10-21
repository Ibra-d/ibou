/*
JQuery
*/

// $(document).ready(function () {
//   $("body").ripples({
//     resolution: 200,
//     perturbance: 2,
//   });
// });

/*
GSAP
*/

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

  /* block.addEventListener */
  $(block).hover(
    /* "mouseenter", */ function (e) {
      const cible = block.childNodes[1];
      console.log(block.childNodes);

      gsap.to(cible, {
        top: "-20px",
        duration: 2,
        opacity: 1,
        ease: Elastic.easeOut,
      });

      gsap.from(".arrow", {
        delay: 0.1,
        duration: 1,
        rotation: 360,
        ease: Elastic.easeOut,
      });
    },
    function () {
      const cible = block.childNodes[1];

      gsap.to(cible, {
        top: "30px",
        duration: 2,
        opacity: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(".arrow", {
        duration: 1,
        rotation: 45,
        ease: Elastic.easeOut,
      });
    }
  );

  /*
  Mouse Leave effect
  */

  //   block.addEventListener("mouseleave", function () {
  //     const cible = block.childNodes[3];

  //     gsap.to(cible, {
  //       delay: 0,
  //       top: "150px",
  //       duration: 1.1,
  //       opacity: 0,
  //       ease: Elastic.easeOut,
  //     });

  //     gsap.fromTo(
  //       ".arrow",
  //       {
  //         duration: 1,
  //         rotation: 360,
  //         ease: Elastic.easeOut,
  //       },
  //       {
  //         rotation: 45,
  //       }
  //     );
  //   });
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

const skewEl = document.querySelector(".blocks__container");

skewEl.scroll = () => {
  alert("ok");
};
