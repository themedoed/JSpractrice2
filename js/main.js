let screen = document.getElementById("screen");
let res = 1;

function onClickPlus (value) {
    res = 10 * res + value;
    screen.innerHTML = res;
};