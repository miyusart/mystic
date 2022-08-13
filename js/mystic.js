window.onscroll = function () { progressBarFunction() };

function progressBarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("prog").style.width = scrolled + "%";
}



/*var topButton = document.querySelectorAll("top-button");


topButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});*/



var cursorinner = document.querySelector('#cursor-inner');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

var cursorouter = document.querySelector('#cursor-outer');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorouter.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

var a = document.querySelectorAll('a');
var smi = document.querySelectorAll('.social-midia-item');
var bt = document.querySelectorAll('button');

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorinner.classList.add('hover');
        cursorouter.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursorinner.classList.remove('hover');
        cursorouter.classList.remove('hover');
    });
})
smi.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorinner.classList.add('hover');
        cursorouter.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursorinner.classList.remove('hover');
        cursorouter.classList.remove('hover');
    });
})
bt.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorinner.classList.add('hover');
        cursorouter.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursorinner.classList.remove('hover');
        cursorouter.classList.remove('hover');
    });
})