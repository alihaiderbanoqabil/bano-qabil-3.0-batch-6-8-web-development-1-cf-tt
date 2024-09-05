let color = 'green';


// if (color === 'green') {
//     console.log('color is green');
// } else if (color === 'red' && num1 === 50) {
//     console.log('color is red');
// } else if (color === 'red' && num2 >= 40) {
//     console.log('color is red');
// } else if (color === 'yellow') {
//     console.log('color is yellow');
// } else if (color === 'blue') {
//     console.log('color is blue');
// } else {
//     console.log("i don't know the color name");
// }

// switch case in javascript

// switch (color) {
//     case 'green':
//         console.log('color is green');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     default:
//         console.log("i don't know the color name");
//         break;
// }



// array in javascript 

// const std1 = 10;
// const std2 = 20;
// const std3 = 30;
// const std4 = 40;
// const std5 = 50;

let studentNames = ['ali', 'hasnain', 'usman', 'haider', 'harry'];
let studentMarks = [10, 20, 30, 40, 50];
let studentGenders = ['male', 'female', 'female', 'female', 'male'];

// let mixedValue = [10, undefined, null, 'string', ['ali', 'ali'], { age: 20, name: 'ali' }]
// delete studentMarks[1]
// studentMarks[3] = 80;
// studentMarks[5] = 60;
console.log(studentNames);
// console.log(studentMarks);
// console.log(studentMarks[1]);
// console.log(studentMarks[4]);
// console.log(studentMarks[studentMarks.length - 1]);
// console.log(mixedValue);


const student1Info = {
    gender: 'male',
    name: 'ali',
    age: 30,
    city: 'karachi',
    address: {
        gender: 'male',
        name: 'ali',
        age: 30,
        city: 'karachi1',
    }
};

student1Info.city = 'Pindi'
student1Info.country = 'Pakistan'
delete student1Info.city
delete student1Info.address.city

console.log(student1Info);
console.log(student1Info.age);
console.log(student1Info['age']);
console.log(student1Info['address']);
console.log(student1Info.name);
console.log(student1Info.city);
console.log(student1Info.address.city);

const student2Info = {
    gender: 'male1',
    name: 'ali1',
    age: 301,
    city: 'karachi1',
}




const studentsInfo = [
    // {
    //     gender: 'male',
    //     name: 'ali',
    //     age: 30,
    //     city: 'karachi',
    // },
    // {
    //     gender: 'male1',
    //     name: 'ali1',
    //     age: 301,
    //     city: 'karachi1',
    // }
    student1Info,
    student2Info
]





