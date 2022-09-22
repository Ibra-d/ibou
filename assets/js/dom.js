$(".toggle_up").on("click", function () {
  gsap.to(".toggle_up", {
    x: "200",
  });

  gsap.to(".toggle_up > .bar1, .toggle_up > .bar2", {
    position: "absolute",
  });

  setTimeout(() => {
    gsap.to("nav > ul", {
      translate: "0 0",
      ease: Expo.easeInOut,
    });
  }, 500);
});

$(".toggle_down").on("click", function () {
  setTimeout(() => {
    gsap.to("nav > ul", {
      translate: "100% 0",
      ease: Elastic.easeOut,
    });
  }, 500);

  gsap.to(".toggle_up", {
    delay: 1,
    x: "0",
  });

  gsap.to(".toggle_up > .bar1, .toggle_up > .bar2", {
    position: "relative",
  });
});

$(document).on("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  $(".cursor").css({
    top: y,
    left: x,
  });

  $(".img_container ").css({
    translate: `${-x / 60 + "px"} ${-y / 60 + "px"}`,
  });
});

$("a").mouseenter(function () {
  $(".cursor").css({
    height: "50px",
    width: "50px",
    "background-color": "transparent",
    border: "1px solid #000",
  });
});

$("a").mouseleave(function () {
  $(".cursor").css({
    height: "20px",
    width: "20px",
    "background-color": "#000",
    border: "none",
  });
});

gsap.from("nav > ul > li, header > .logo, h1 > span", {
  delay: 3,
  y: "200",
  opacity: 0,
  stagger: 0.08,
  duration: 4,
  ease: Expo.easeInOut,
});

gsap.from(".medias > a", {
  delay: 3,
  x: "200",
  opacity: 0,
  stagger: 0.08,
  duration: 2,
  ease: Expo.easeInOut,
});

gsap.from(".text_subs", 1, {
  scale: 0,
  ease: Elastic.easeOut,
  delay: 6,
});

gsap.to(".loader", 1, {
  top: 0,
  ease: Elastic.easeOut,
});

gsap.to(".loader", 1, {
  ease: Elastic.easeOut,
  delay: 3,
  duration: 2,
  left: "100%",
});
