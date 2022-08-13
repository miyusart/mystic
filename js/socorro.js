window.onscroll = function () { progressBarFunction (), goToTopFunction () };

function progressBarFunction () {
    var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = (scrolled / height) * 100;
    document.querySelector('#progress-bar').style.width = progress + "%";
}

var topButton = document.querySelector('#top-button');
topButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

var topImage = document.querySelector('#top-button img');
function goToTopFunction () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topImage.style.display = "flex";
      } else {
        topImage.style.display = "none";
      }
}