const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const red = document.getElementById("red");
const dark = document.getElementById("dark");

const body = document.getElementById("body");

pink.addEventListener('click', setColors)
blue.addEventListener('click', setColors)
green.addEventListener('click', setColors)
red.addEventListener('click', setColors)
dark.addEventListener('click', setColors)

if (localStorage.getItem('color')) {
    let getColor = JSON.parse(localStorage.getItem('color'))
    localStorage.setItem("color", JSON.stringify(getColor));
    body.classList.add(getColor);
}

export default function setColors(event) {
    let bodyClassRemove = body.classList[0];
    let bodyClassAdd = event.path[0].id;
    body.classList.remove(bodyClassRemove);
    body.classList.add(bodyClassAdd);
    localStorage.setItem("color", JSON.stringify(bodyClassAdd));
}