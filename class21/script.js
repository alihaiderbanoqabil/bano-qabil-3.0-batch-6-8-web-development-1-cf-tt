console.log("Class 21 (Class 4 of JS)");

// primitive vs non primitive

let x = 4;
let y = x;
y = 5;

let name = "ali";
let fulName = name;
fulName = "ali haider";
console.log(name, fulName);

let obj = {
    name: 'ali', age: 27, address: {
        city: 'karachi', country: 'Pakistan'
    }
}
// let copyObj = obj;
// copyObj.name = "hasnain"
// copyObj.address.city = "Multan"

// deep copy 
// const deepCopy = JSON.parse(JSON.stringify(obj));
const deepCopy = structuredClone(obj);
deepCopy.name = 'hasnain';
deepCopy.address.country = 'India';
console.log(obj, 'obj');
console.log(deepCopy, 'deepCopy');



const shallowCopy = { ...obj, address: { ...obj.address } };
shallowCopy.name = 'hasnain';
shallowCopy.address.country = 'India';
console.log(obj, 'obj');
console.log(shallowCopy, 'shallowCopy');

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

const jsonObject = JSON.stringify(obj);
const nativeObject = JSON.parse(jsonObject);
// console.log(Object.values(jsonObject));
// console.log(typeof jsonObject, jsonObject);
// console.log(nativeObject, 'nativeObject');

// console.log(obj);

// console.log(copyObj);

// console.log(x, y);

const names = ["ali", 'hasnain', "usman"];
// console.log(JSON.stringify(names));

const duplicateNames = names;
duplicateNames[0] = 'talha'



// console.log(names);
// console.log(duplicateNames);

