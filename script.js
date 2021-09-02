const subNavCir = document.getElementsByClassName("sub-nav-circle");
const subLink1 = document.getElementById("subLink1");
const subLink2 = document.getElementById("subLink2");
const subLink3 = document.getElementById("subLink3");

subNavCir[0].addEventListener("click", function () {
   subLink1.classList.toggle("closed");
   setTimeout( () => {
       subLink2.classList.toggle("closed");
   }, 200);
   setTimeout( () => {
        subLink3.classList.toggle("closed");
   }, 400)
});
