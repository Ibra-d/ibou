/*
JQuery
*/

// $(document).mousemove(function (e) {
//   // $("body").ripples({
//   //   resolution: 200,
//   //   perturbance: 2,
//   // });

//   console.log(e.clientX);

//   $(".cursor, .cursor_s").css({
//     top: e.clientY + "px",
//     left: e.clientX + "px",
//   });
// });

/*
GSAP
*/

gsap.from(
  ".header__logo, li > a, .blocks__container, .block, .mailto > a, .medias > a",
  {
    duration: 3,
    delay: 1,
    opacity: 0,
    y: "50",
    stagger: 0.1,
    ease: Elastic.easeOut,
  }
);

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
      const cible = block.childNodes[3];
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
      const cible = block.childNodes[3];

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
});

/* 
Locomotive scroll
*/

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal",
  multiplier: 1 / 10,
});

/*
Three Js
*/

// const scene = new THREE.Scene();

/*
Vanilla Js
*/

/*
TweenMax
*/

var cursor = $(".cursor"),
  follower = $(".cursor_s");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX,
        top: posY,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$("a").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("active");
});

$("a").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("active");
});

