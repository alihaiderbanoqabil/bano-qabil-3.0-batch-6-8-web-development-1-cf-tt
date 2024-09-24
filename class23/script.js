console.log("Class 23 (Class 6 of JS)");
const name = "       Ali Haider         ";
const firstName = "Ali";
const lastName = "Haider";
// console.log(lastName[0]);
// console.log(lastName.charAt(0));
// console.log(lastName.charAt(lastName.length - 1));
// console.log(lastName.at(0));
// console.log(lastName.at(-1));

// let text = "Hello world!";
// let result = text.repeat(100);
// console.log(result);

// let text = "Please visit Microsoft! microsoft!";
// let newText = text.replace(/Microsoft/gi, "W3Schools");
// // let newText = text.replace("Microsoft", "W3Schools");
// // let newText = text.replaceAll("Microsoft", "W3Schools");

// console.log(text, newText);
// console.log(text.split(" "));


// let text = "Apple, Banana, Kiwi";
// // let part = text.slice(7, 13);
// let part = text.slice(7);
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12,-6);

// let str = "Apple, Banana, Kiwi";
// // let part = str.substring(7, 13);
// let part = str.substring(7);
// console.log(text);
// console.log(part);



// let text = "Hello world, welcome to the universe.";
// let result = text.includes("universe.");
// console.log(result);

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("w");
// console.log(result);

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));


// let text = "Mr. Blue has a blue house";
// let position = text.search("bluke");

// console.log(position);


const names = ["ali", 'hasnain', "usman"];
let obj = {
    name: 'ali', age: 27, address: {
        city: 'karachi', country: 'Pakistan'
    }
}


// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     console.log(name);
// }

// for (const name of names) {
//     console.log(name, 'name');
// }
// console.log(names);

// for (const key in names) {
//     console.log(key, 'key');
// }
// console.log(obj);

// for (const key in obj) {
//     // console.log(key, 'key', obj.key);
//     console.log(key, 'key', obj[key]);
// }

// console.log(obj);

// const entriesObj = Object.entries(obj)
// // Object methods in JS 
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(entriesObj);
// console.log(Object.fromEntries(entriesObj));

const objectKeys = Object.keys(obj);
// for (let index = 0; index < objectKeys.length; index++) {
//     const key = objectKeys[index];
//     console.log(key, 'key', obj[key]);
// }

// console.log(obj);
// Object.freeze(obj)
// Object.seal(obj)
obj.name = "hasnain";
delete obj.address
obj.gender = 'male'
// console.log(obj);
// // console.log(Object.isFrozen(obj));
// console.log(Object.isSealed(obj));

// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('Name'));
// console.log('name' in obj);
// console.log('Name' in obj);


// Create an Array
const fruits = [
    { name: "apples", quantity: 300, type: "fruit" },
    { name: "bananas", quantity: 500, type: "fruit" },
    { name: "oranges", quantity: 200, type: "fruit" },
    { name: "kiwi", quantity: 150, type: "fruit" },
    { name: "tomoto", quantity: 300, type: "vegetable" },
    { name: "potato", quantity: 150, type: "vegetable" }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity >= 200 ? "ok" : "low";
}

// Group by Quantity
// const result = Object.groupBy(fruits, myCallback);
const result = Object.groupBy(fruits, function (element, index) {

    console.log(element, index, element.quantity);
    return element.type;
    // return element.quantity >= 200 ? "ok" : "low";
});
console.log(fruits);
// console.log(myCallback);
console.log(result);
