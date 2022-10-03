gsap.from(
  ".logo, .navLink, .presentation > h1, .presentation > .what_i_do, .liens",
  {
    delay: 1,
    duration: 3,
    opacity: 0,
    y: "100",
    stagger: 0.09,
    ease: Expo.easeInOut,
  }
);

gsap.from(".reseaux > a", {
  delay: 2,
  duration: 3,
  opacity: 0,
  x: "100",
  stagger: 0.09,
  ease: Expo.easeInOut,
});
