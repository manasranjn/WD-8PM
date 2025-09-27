//! async - await
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    const data = await response.json()
    console.log(data);
}

// getData()

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    const data = await response.json()
    console.log(data);
}

// getUsers()

console.log(a);

//! Hoisting
//? Variable hoisting
var a = 10
console.log(a);

// console.log(b); // Not allowed
let b = 10
console.log(b);

example()
//? Function Hoisting
function example() {
    console.log("Hello");

}
example()

// example2() //Not allowed
var example2 = () => {
    console.log("Hi");

}
example2()