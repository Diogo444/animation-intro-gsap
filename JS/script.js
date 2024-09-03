/** @format */

// Sélectionne l'élément que tu veux animer
const site = document.querySelector(".site");

// Crée une timeline
const tl = gsap.timeline();

// Ajoute la première animation à la timeline
tl.to(".site", {
  duration: 2,
  rotate: 360,
  y: "50vh",
  ease: "bounce",
});

tl.to(".site", {
  duration: 5,
  rotate: 720,
  x: "50vw",
});

// Ajoute une deuxième animation à la suite
tl.to(".site", {
  duration: 2,
  width: "100vw",
  height: "100%",
  top: 0,
  x: 0,
  y: 0,
});
