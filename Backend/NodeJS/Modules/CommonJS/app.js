console.log("Hello everyone, this is App.js");

//! Import addition function from math module
// const add = require("./math")

// add(20, 10)
// add(30, 80)

//! Import the entire math module
// const math = require("./math")

// math.addition(200, 50)
// math.subtraction(500, 90)

//! Import the entire math module by destructuring
const { addition, subtraction } = require("./math")

addition(200, 50)
subtraction(500, 90)