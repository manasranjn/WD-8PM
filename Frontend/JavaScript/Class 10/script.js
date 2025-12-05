const button = document.getElementById("btn")
const heading = document.getElementById("head")

button.onclick = () => {
    // console.log("Hello");
    heading.style.color = "red"
    heading.innerText = "Button Clicked"
    heading.style.fontSize = "50px"
}

const button2 = document.getElementById("btn2")
button2.ondblclick = () => {
    heading.style.color = "green"
    heading.innerText = "Button Clicked"
    heading.style.fontSize = "50px"
}

const box = document.getElementById("box")
box.onmouseleave = () => {
    box.style.backgroundColor = "blue"
    box.style.display = "none"
}

let showBtn = document.getElementById("show")

showBtn.onmouseenter = () => {
    box.style.display = "block"
}

//! Event Object
let section = document.querySelector("#section")

section.onmouseenter = (e) => {
    section.style.color = "blueviolet"
    section.style.fontSize = "30px"
    console.log(e);
    console.log(e.target);
    console.log(e.type);
}

const input = document.querySelector(".input")
input.onchange = (e) => {
    console.log(e.target.value);

}

let gender = document.getElementById("gender")
gender.onchange = (e) => {
    console.log(e.target.value);

}