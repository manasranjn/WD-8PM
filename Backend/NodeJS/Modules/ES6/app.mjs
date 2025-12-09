//! Import Single Module
// import addition from "./math.mjs";

// addition(10, 10)

//! Import Multiple/Entire Module
// import math from "./math.mjs";

// math.addition(10, 10)
// console.log(math.name);
// console.log(math.value);
// math.subtraction(50, 20)

//! Import Module by destructuring
import { addition, subtraction, name, value } from "./math.mjs";

addition(10, 10);
subtraction(50, 20);
console.log(name);
console.log(value);