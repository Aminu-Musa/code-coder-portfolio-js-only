// Typed.js animated text

var typed = new Typed("#animatedText", {
  strings: ["Web Developer", "Geospatial Analyst", "Data Scientist"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
});

gsap.from("#gsap-image-animation", { opacity: 0, y: -50, duration: 1.5 });


// HANDLING HAMBURGER MENU START
let navMenuLinks = document.querySelector(".nav-link-menu");
const navContainer = document.querySelector(".nav-bar-section");
const closeMenu = document.querySelector(".close-nav-menu-col");
const openNav = document.querySelector(".open-menu");

navMenuLinks = navMenuLinks.children

openNav.addEventListener("click", () => {
  navContainer.classList.remove("close-nav");
});

closeMenu.addEventListener("click", () => {
  navContainer.classList.add("close-nav");
});


console.log(navMenuLinks[0]);


 for (i = 0; i < navMenuLinks.length; i++){
  navMenuLinks[i].addEventListener("click", ()=>{
    navContainer.classList.add("close-nav");
  })}





// HANDLING HAMBURGER MENU END
