
console.log("Class 22 (Class 5 of JS)");

// console.log(sum(200, 400));

// function sum(n1 = 30, n2 = 40) {
//     console.log(arguments, 'arguments');

//     return n1 + n2;
// }
// console.log(sum(200, 400));

// function sum(n1 = 30, n2 = 40, n3) {
//     console.log(n1, n2, n3);
//     return n1 + n2 + 300;
// }
// function sum(n1 = 30, n2 = 40) {
//     return n1 + n2;
// }
// console.log(sum(200, 400));

// console.log(sum(200, 400));

// const sum = (n1 = 30, n2 = 40) => {
//     console.log(arguments, 'arguments');
//     return n1 + n2;
// }

// const sum = (n1 = 30, n2 = 40) => {
//     return n1 + n2;
// }

// const sum = function (n1 = 30, n2 = 40) {
//     return n1 + n2;
// }
// const sum = (n1 = 30, n2 = 40) => n1 + n2

// console.log(sum(200, 400));


// const age = 300_000_000_000_000;
const age = 30;
let name = 'ali';
const phoneNumber = '030000000';

// let obj = { name: name, age: age, cellNumber: phoneNumber }
let obj = { name, age, cellNumber: phoneNumber }
console.log(obj);

const lotsOfParameters = ({ p1, p2, p3, p4, p5 }) => {
    console.log({ p1, p2, p3, p4, p5 });
}

lotsOfParameters({ p1: 10, p5: 50, p4: 40, p3: 30, p60: 50 })



// (function () {
//     var name = "ali";
//     console.log(name);
// })()

let PI = 22 / 7;
function pureFunction(n1, n2) {
    console.log(n1 + n2);
}

pureFunction(10, 20)

