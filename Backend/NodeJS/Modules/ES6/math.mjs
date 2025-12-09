//! Export function as module
// const addition = (a, b) => {
//     console.log(a + b);
// }

// export default addition

//! Export multiple functions and values as modules
// const addition = (a, b) => {
//     console.log(a + b);
// }

// const subtraction = (a, b) => {
//     console.log(a - b);
// }

// export default {
//     addition,
//     subtraction,
//     value: 1234,
//     name: "Math Module"
// }

//! Export values separately for destructuring
export function addition(a, b) {
    console.log("Addition:", a + b);
}

export function subtraction(a, b) {
    console.log("Subtraction:", a - b);
}

export const name = "Math Module";
export const value = 100;
