const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".sm-nav-links");
const navbar = document.querySelector(".nav-bar");
const goUp = document.querySelector(".go-up");

// toggling the navbar on mobile screens
hamburger.addEventListener("click", () =>{
  navlinks.classList.toggle("open");
});

// changing the navbar bg on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.style.backgroundColor = "var(--dark-blue)";
    navbar.style.boxShadow = "0 0 30px var(--dark-blue)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
  // toggling the up button
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    goUp.style.opacity = "1";
  } else {
    goUp.style.opacity = "0";
  }
}