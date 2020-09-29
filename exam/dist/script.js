const Fruits = gsap.timeline({
  repeat: -1,
  yoyo: true,
})
.to(".PommeR", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Pizza", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Courge", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Fraise", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Hamburger", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Pasteque", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Poulet", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".Raisin", {fontSize: "125px", duration: 1, delay: 0.25,})
.to(".PommeV", {fontSize: "125px", duration: 1, delay: 0.25,})

const BackGroundFormulaire = gsap.to('.SectionFormulaire', {
  scrollTrigger: { 
    scrub: true,
    start: 'center top',  
  },
  backgroundColor: "rgb(255, 255, 255)",
  duration: 2,
});

const Formulaire = gsap.to('.FormulaireBouton', {
  scrollTrigger: {
    scrub: true,
    trigger: '.SectionFormulaire',
    start: '25% 50%',
    end: '50% 100%',
  },
  opacity: 1,
  duration: 1,
});