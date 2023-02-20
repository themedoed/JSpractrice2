let screen = document.getElementById("screen");
let res;
let flag = null;
screen.innerHTML = null;

function onClickAC() {
    screen.innerHTML = null;
}

function onClickNum (value) {
    if (screen.innerHTML == null) {
        screen.innerHTML = screen.innerHTML + value;
    }
    else {
        screen.innerHTML = screen.innerHTML * 10 + value;
    }
};

function onClickC () {
    screen.innerHTML = Math.floor(screen.innerHTML / 10);
}