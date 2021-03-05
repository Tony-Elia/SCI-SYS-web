const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".sm-nav-links");
const navbar = document.querySelector(".nav-bar");

// toggling the navbar on mobile screens
hamburger.addEventListener("click", () =>{
  navlinks.classList.toggle("open");
});

// changing the navbar bg on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "var(--dark-blue)";
    navbar.style.boxShadow = "0 0 30px var(--dark-blue)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
}