// search bar code
function search() {
    var input = document.getElementById("input");
    var filter = input.value.toUpperCase();
    var tiles = $(".tn-news");
    for (let i = 0; i < tiles.length; i++) {
        const textContent = tiles[i].childNodes[3].childNodes[1].childNodes[1].innerText;
        if (textContent.toUpperCase().indexOf(filter) > -1) {
            tiles[i].style.display = "";
        } else {
            tiles[i].style.display = "none";
        }
    }
};

// search bar animation
var input = document.getElementById('input');
var message = document.getElementsByClassName('fa-search')[0];
var animationTime = 400;
input.addEventListener('focus', function() {
    message.style.display = 'none';
    message.style.transition = `cubic-bezier(0.68, -0.55, 0.27, 1.55) ${animationTime}ms`
});
message.addEventListener("click", function() {
   input.focus();
});
message.addEventListener("click", function() {
   input.focus();
});
input.addEventListener('focusout', function() {
   setTimeout(() => {
          message.style.display = 'flex';

   },  animationTime)

});