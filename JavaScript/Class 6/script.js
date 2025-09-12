//* Function
//! Pre-Defined Function
// console.log("Hello");
// console.log("Hello Everyone".toLowerCase());

//! User-Defined Function
//? Normal Function
function sum() {
    console.log(10 + 20);
}
// sum()

//* Without parameter
function add() {
    return 40 + 20
}
// console.log(add());
// console.log(add());
// console.log(add());

//* With parameter
function sub(a, b) {
    console.log(a);
    console.log(b);

    return a - b
}
// console.log(sub(10, 2));
// console.log(sub(100, 50));
// console.log(sub(90, 60));

//* Default Parameter
function multi(a = 1, b = 1) {
    console.log(a);
    console.log(b);

    return a * b
}
// console.log(multi(10, 3));

//? Arrow Function
const divide = (a, b) => {
    return a / b
}

// console.log(divide(10, 3));

const sayHello = () => {
    console.log("Hello Everyone");
    console.log("Good Evening");
}
// sayHello()
// sayHello()
// sayHello()

//? CallBack Function
// function diplayResult(result) {
//     console.log("Final Result is " + result);
// }

// function calculate(a, b, callback) {
//     let sum = a + b
//     callback(sum)
// }

// calculate(20, 40, diplayResult)

//? Anonymous Function
const findSum = function () {
    console.log(10 + 60);

}

findSum()