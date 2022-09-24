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
      translate: "150% 0",
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

  return { x, y };
});

$("a").mouseenter(function () {
  $(".cursor").css({
    height: "60px",
    width: "60px",
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

gsap.from("nav > ul > a, header > .logo, section ", {
  delay: 3,
  y: "200",
  opacity: 0,
  stagger: 0.09,
  duration: 4,
  ease: Expo.easeInOut,
});

gsap.from(".medias > a", 4, {
  delay: 5,
  x: "200",
  opacity: 0,
  stagger: 0.09,
  ease: Expo.easeInOut,
});

gsap.from(".text_subs", 1, {
  scale: 0,
  ease: Elastic.easeOut,
  delay: 6,
});

gsap.to(".loader", 2, {
  top: 0,
  ease: Elastic.easeOut,
});

gsap.to(".loader", 2, {
  ease: Expo.easeInOut,
  delay: 3,
  left: "100%",
});

const dataImg = document.querySelectorAll(".medias > a");
dataImg.forEach((el) => {
  const attr = el.dataset.img;

  el.addEventListener("mouseenter", function (e) {
    const img = document.querySelector(".image_de_reseau");
    img.src = attr;

    gsap.from(img,  {
      opacity: 0,
    });
    gsap.to(img, {
      opacity: 1,
      delay: 2,
    });
  });

  el.addEventListener("mouseleave", function (e) {
    const img = document.querySelector(".image_de_reseau");
    img.src = "";
  });
});
