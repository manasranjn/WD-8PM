//! Export function as module
// const addition = (a, b) => {
//     console.log(a + b);
// }

// module.exports = addition

// //! Export multiple functions as modules
const addition = (a, b) => {
    console.log(a + b);
}

const subtraction = (a, b) => {
    console.log(a - b);
}

module.exports = { addition, subtraction }