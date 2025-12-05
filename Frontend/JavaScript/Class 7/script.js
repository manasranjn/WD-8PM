//! forEach()
let arr = [90, 10, 20, 60, 70, 30, 40, 50]
// for (let e of arr) {
//     console.log(e);
// }

// let arr2 = arr.forEach((e, idx) => {
//     console.log(e);
//     console.log(idx);

//     return e + 10
// })
// console.log(arr2);

//! map()
let arr3 = arr.map((item, idx) => {
    // console.log("Value is ", item);
    // console.log("Index is ", idx);

    // return item + 10
})
// console.log(arr3);

//! filter()
let arr4 = arr.filter((item) => {
    return item > 30
})

// console.log(arr4);

//! reduce()
let total = arr.reduce((sum, item) => sum += item, 0)
// console.log(total);

arr = [90, 10, 20, 60, 70, 30, 40, 50]
//! sort()
let ascdArr = arr.sort((a, b) => a - b)
// [10,20,60,70,30,40,50,90]
// [10,20,60,30,40,50,70,90]
// [10,20,30,40,50,60,70,90]
// console.log(ascdArr);

let dscdArr = arr.sort((a, b) => b - a)
// [90, 20, 60, 70,30,40,50,10]
// [90, 60,70, 30, 40,50,20,10]
// [90, 70, 60, .....]
console.log(dscdArr);




//! DOM
// console.log(window);
// console.log(document);

