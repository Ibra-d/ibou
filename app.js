/*
GSAP
*/

gsap.to(".container", {
  duration: 2,
  delay: 8,
  opacity: 1,
});

gsap.to(".loader", {
  delay: 8,
  duration: 1,
  ease: Expo.easeIn,
  left: "100%",
});

/**
 * Skew effect
 * on scroll
 */

/* 
Locomotive scroll
*/

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal",
  multiplier: 1 / 10,
});

/**
 * Loader
 * Counter
 */


setTimeout(() => {
  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $(".loader > p").html(c + "%");

    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
    }
  }, 60);
}, 1500);

/*
TweenMax
*/

var cursor = $(".cursor"),
  follower = $(".cursor_s");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.01, {
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

$("a").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$("a").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});
