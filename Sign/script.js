const showHide = document.querySelector("#togglePass");
const passField = document.querySelector("#passField");
const showHide1 = document.querySelector("#togglePass1");
const passField1 = document.querySelector("#passField1");
const showHide2 = document.querySelector("#togglePass2");
const passField2 = document.querySelector("#passField2");
const newAccount = document.querySelector("#newAcc");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const oldAccount = document.querySelector("#oldAcc");

var show = false;
var show1 = false;
var show2 = false;

showHide.addEventListener( "click", function () {
    if (show) {
        showHide.classList.remove("fa-eye-slash");
        passField.setAttribute("type", "password");
        show = false;
    } else {
        showHide.classList.add("fa-eye-slash");
        passField.setAttribute("type", "text");
        show = true;
    }
});

showHide1.addEventListener( "click", function () {
    if (show1) {
        showHide1.classList.remove("fa-eye-slash");
        passField1.setAttribute("type", "password");
        show1 = false;
    } else {
        showHide1.classList.add("fa-eye-slash");
        passField1.setAttribute("type", "text");
        show1 = true;
    }
});

showHide2.addEventListener( "click", function () {
    if (show2) {
        showHide2.classList.remove("fa-eye-slash");
        passField2.setAttribute("type", "password");
        show2 = false;
    } else {
        showHide2.classList.add("fa-eye-slash");
        passField2.setAttribute("type", "text");
        show2 = true;
    }
});


newAccount.addEventListener("click", function () {
    signIn.style.transform = "translateX(-200%)";
    signUp.style.transform = "translateX(-50%)";
});

oldAccount.addEventListener("click", function () {
    signIn.style.transform = "translateX(50%)";
    signUp.style.transform = "translateX(200%)";
});