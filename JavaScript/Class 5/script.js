//! Strings and it's inbuilt methods
let s1 = 'Hello'
let s2 = "Hi 123"
let Name = "ABCD"
let age = 30


let str = "My name is " + Name + " and my age is " + age
// console.log(str);

//? String Literals
let literal = `Hello everyone`
// console.log(literal);

//? Template Literals
// ${}
let str2 = `My name is ${Name} and my age is ${age}`
// console.log(str2);

//! String Inbuilt Methods
let text = "  Lorem ipsum dolor sit amet, consectetur ipsum adipisicing elit. Non doloremque optio ea repudiandae, odio fugit pariatur? Alias natus culpa quia ipsum laudantium sed ipsum nam? Quos molestias quisquam rem ipsum officiis vel!  "

//? indexOf()
// console.log(text.indexOf('ipsum'));

//? lastIndexOf()
// console.log(text.lastIndexOf("ipsum"));

//? charAt()
// console.log(text.charAt(10));

//? toUpperCase()
// console.log(text.toUpperCase());

//? toLowerCase()
// console.log(text.toLowerCase());

//? trim()
// console.log(text.trim());

//? slice()
let subStr = text.slice(3, 10)
// console.log(subStr);

//? replace()
let newStr = text.replace("ipsum", "Hello")
// console.log(newStr);

//? replaceAll()
let newText = text.replaceAll("ipsum", "Hi")
// console.log(newText);

//? length
// console.log(text.length);

//? split()
let arr = text.split("ipsum")
// console.log(arr);

let arr2 = text.split(" ")
// console.log(arr2);

let arr3 = text.split("")
// console.log(arr3);
