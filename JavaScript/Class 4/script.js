//! Loops in JS
//? for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


//? while loop
// let x = 0
// while (x < 5) {
//     console.log(x);
//     x++
// }



//? do-while loop
// let y = 0
// do {
//     console.log(y);
//     y++
// } while (y > 10)



//? for-in loop
let obj = {
    name: "ABCD",
    age: 20,
    address: "BBSR",
    pass: true,
    gender: "Male"
}

// for (let k in obj) {
//     console.log(k);
//     console.log(obj[k]);
// }

//? for-of loop
// let arr = [10, 20, 30, 40, 50, 60]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let e of arr) {
//     console.log(e);
// }

// let str = "Hello everyone"
// for (let s of str) {
//     console.log(s);
// }


//! Array Inbuilt methods
let arr = [10, 20, 30, 40, 50, 60]
//? push()
// arr.push(1, 2, true, "Hi")
// console.log(arr);

//? pop()
// console.log(arr.pop());
// console.log(arr);

//? unshift()
// arr.unshift(undefined, false, 1)
// console.log(arr);

//? shift()
// console.log(arr.shift());
// console.log(arr);

//? slice()
// let subArr = arr.slice(1, 5)
// console.log(subArr);

//? splice()
//* insert
// arr.splice(4, 0, "Hi", "Hello")
// console.log(arr);
//* Delete
// arr.splice(2, 2)
// console.log(arr);
//* Replace
// arr.splice(3, 2, "Hi", true, undefined, null)
// console.log(arr);

//? includes
// console.log(arr.includes(1));
// console.log(arr.includes(10));

//? toString()
// let arrStr = arr.toString()
// console.log(arrStr);

//? reverse()
console.log(arr.reverse());
