//? DOM Selection Methods
//! getElementById()
let head1 = document.getElementById("heading")
// console.log(head1);

//! getElementsByClassName()
let head2 = document.getElementsByClassName("head")
// console.log(head2);

//! getElementsByTagName()
let head3 = document.getElementsByTagName("h1")
// console.log(head3);

//! getElementsByName()
let email = document.getElementsByName("email")
// console.log(email);
let pass = document.getElementsByName("password")
// console.log(pass);

//! querySelector()
let heading = document.querySelector('.head')
// console.log(heading);

let heading2 = document.querySelector("#heading")
// console.log(heading2);

//! querySelectorAll()
let headingColl = document.querySelectorAll(".head")
// console.log(headingColl);

//? DOM Manipulation
//! Style Manipulation
head1.style.color = "green"
head1.style.backgroundColor = "black"

//! Text Manipulation
//* InnerText
// head1.innerText = "Hello Everyone"

//* textContent
// head1.textContent = "New Heading"

//* InnerHTML
// head1.innerHTML = "Hi"

//! Attribute Manipulation
//? getAttribute()
let catImage = document.querySelector("#image")
let heightVal = catImage.getAttribute("height")
// console.log(heightVal);
// console.log(catImage.getAttribute("alt"));

//? setAttribute()
catImage.setAttribute("src", "https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg")
catImage.setAttribute("src", "https://cdn.pixabay.com/photo/2024/10/16/16/14/cat-9125207_1280.jpg")

catImage.setAttribute("class", "cat-img")
console.log(catImage);

//! Remove/Delete Element
// catImage.remove()
head1.remove()