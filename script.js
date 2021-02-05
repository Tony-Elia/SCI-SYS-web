const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links-li");

hamburger.addEventListener("onclick", () =>{
  console.log("u clicked me!!");
  navlinks.classList.toggle("open");
});

function toggleClass() {
  console.log("hello there");
  navlinks.classList.toggle("open");
};