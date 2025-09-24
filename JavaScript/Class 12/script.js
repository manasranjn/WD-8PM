// const button = document.getElementById("btn")
// const box = document.querySelector(".box")

// box.style.backgroundColor = "black"
// button.addEventListener('click', () => {
//     // box.style.backgroundColor = "white"
//     if (box.style.backgroundColor === "black") {
//         box.style.backgroundColor = "white"
//     }
//     else if (box.style.backgroundColor === "white") {
//         box.style.backgroundColor = "black"
//     }

//     // box.style.backgroundColor === "black" ? box.style.backgroundColor = "white" : box.style.backgroundColor = "black"
// })


//! Class

class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello my name is ${this.name}, and my age is ${this.age}`);
    }
}

const person1 = new Example("Manas", 25)
// console.log(person1.name);
// person1.greet()

const person2 = new Example("Akash", 20)
// person2.greet()

//! Inheritance
class Animal {
    makeSound() {
        console.log("Animals makes some sound");
    }
}

let a1 = new Animal()
// a1.makeSound()

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
let a2 = new Dog()
// a2.makeSound()

console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");
setTimeout(() => {
    console.log("Five");
}, 5000)
console.log("Six");
