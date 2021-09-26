var tiles = $(".tn-news");

// search bar code
function search() {
    var input = document.getElementById("input");
    var filter = input.value.toUpperCase();
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

// filtering method
const allCategories = document.getElementById("all");
const electricity = document.getElementById("electricity");
const electronicPhysics = document.getElementById("electronicPhysics");
const thermodynamics = document.getElementById("thermodynamics");
const newest = document.getElementById("newest");
const oldest = document.getElementById("oldest");
const topRatted = document.getElementById("topRatted");

function applyFilter() {
    // categories
    if (allCategories.checked) {
        fadeIn = $(".tn-news");
        for (let i = 0; i < fadeIn.length; i++) {
            const tile = fadeIn[i];
            tile.classList.remove("hidden");
        }

    } else if (electricity.checked) {
        fadeIn = $(".tn-news");
        for (let i = 0; i < fadeIn.length; i++) {
            const tile = fadeIn[i];
            tile.classList.remove("hidden");
        }
        fadeOut = $(".tn-news:not([category='electricity'])");
        console.log(fadeOut);
        for (let i = 0; i < fadeOut.length; i++) {
            const tile = fadeOut[i];
            tile.classList.add("hidden");
            console.log(tile);
        }

    } else if (electronicPhysics.checked) {
        fadeIn = $(".tn-news");
        for (let i = 0; i < fadeIn.length; i++) {
            const tile = fadeIn[i];
            tile.classList.remove("hidden");
        }
        fadeOut = $(".tn-news:not([category='electronicPhysics'])");
        console.log(fadeOut);
        for (let i = 0; i < fadeOut.length; i++) {
            const tile = fadeOut[i];
            tile.classList.add("hidden");
        }

    } else if (thermodynamics.checked) {
        fadeIn = $(".tn-news");
        for (let i = 0; i < fadeIn.length; i++) {
            const tile = fadeIn[i];
            tile.classList.remove("hidden");
        }
        fadeOut = $(".tn-news:not([category='thermodynamics'])");
        console.log(fadeOut);
        for (let i = 0; i < fadeOut.length; i++) {
            const tile = fadeOut[i];
            tile.classList.add("hidden");
        }
    };

    if (newest.checked) {
        console.log("newest");
    } else if (oldest.checked) {
        console.log("oldest");
    } else if (topRatted.checked) {
        console.log("top ratted");
    };
    //  iterating dates
    for (let i = 0; i < tiles.length; i++) {
        const date = tiles[i].childNodes[3].childNodes[1].childNodes[5].innerText;
    };
};

// Setup for the tabs
const article = document.getElementById("article");
const videos = document.getElementById("videos");
const news = document.getElementById("news");
const quiz = document.getElementById("quiz");
const tabsTitles = $('.tabs-titles');

$('.nav-pills a:not(.cursor-pointer)').click(function () {
    article.classList.remove("active", "show");
    videos.classList.remove("active", "show");
    news.classList.remove("active", "show");
    for (let i = 0; i < tabsTitles.length; i++) {
        const title = tabsTitles[i];
        title.style.display = "none";
    };
});

$('.nav-pills a.cursor-pointer').click(function(){
    article.classList.add("active", "show");
    videos.classList.add("active", "show");
    news.classList.add("active", "show");
    quiz.classList.remove("active", "show");
    for (let i = 0; i < tabsTitles.length; i++) {
        const title = tabsTitles[i];
        title.style.display = "block";
    };
});

article.classList.add("active", "show");
videos.classList.add("active", "show");
news.classList.add("active", "show");
quiz.classList.remove("active", "show");