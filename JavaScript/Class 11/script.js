//! Event Listner
//? addEventListener()
const button = document.getElementById("btn")
const box = document.querySelector(".box")
const handleBox = () => {
    box.style.display = "block"
}

// button.addEventListener("click", handleBox)

button.addEventListener("mouseenter", () => {
    box.style.display = "block"
})
button.addEventListener("mouseleave", () => {
    box.style.display = "none"
})

//? removeEventListener()
setTimeout(() => {
    console.log("Removed");

    button.removeEventListener("click", handleBox)
}, 5000)


const obj1 = {
    name: "ABCD",
    age: 20
}

const obj2 = {
    __proto__: obj1,
    name: "XYZ",
    address: "BBSR"
}

console.log(obj2.name);
console.log(obj2.address);

const obj3 = Object.create(obj1)
console.log(obj3.age);
obj3.course = "MERN"
console.log(obj3.course);
