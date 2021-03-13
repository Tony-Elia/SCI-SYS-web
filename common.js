const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".sm-nav-links");
const navbar = document.querySelector(".nav-bar");
const goUp = document.querySelector(".go-up");
const lazyTargets = document.querySelectorAll(".lazy-load");

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
  // toggling the up button
  if (goUp) {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      goUp.style.opacity = "1";
    } else {
      goUp.style.opacity = "0";
    }
  }
};

// Lazy load animation
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      appearOnScroll.unobserve(entry.target);
    };
  })
}, appearOptions);

lazyTargets.forEach(lazyTarget => {
  appearOnScroll.observe(lazyTarget);
});