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

$("a").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$("a").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

gsap.from(
    ".header__logo, li > a, .my_bio > div",
    {
      duration: 3,
      delay: 1,
      opacity: 0,
      y: "50",
      stagger: 0.1,
      ease: Elastic.easeOut,
    }
  );