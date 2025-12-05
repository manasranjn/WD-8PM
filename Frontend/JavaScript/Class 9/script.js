//? Create a new Element
const heading = document.createElement("h1")
// console.log(heading);

heading.innerText = "This is a new Heading"
// console.log(heading);

const box = document.getElementById("box")
//? Insert Element
//! append
// box.append(heading)

//! prepend
// box.prepend(heading)

//! after
// box.after(heading)

//! before
// box.before(heading)

//! appendChild
// box.appendChild(heading)

//! Prompt
// let input = prompt("Enter Your Name")
// console.log(input);

// let age = parseInt(prompt("Enter Your age"))
// console.log(typeof age);

//! Alert
// alert("Warning")

//! Event and Event Handling
function handleClick() {
    console.log("button Clicked");

}