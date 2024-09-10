
// let n1 = 30, n2 = 50;
// const sum1 = n1 + n2;
// console.log(sum1);

// let n3 = 40, n4 = 50;
// const sum2 = n3 + n4;
// console.log(sum2);

const add = sum(20, 30)
console.log(add);

function sum(n1 = 30, n2 = 40) {
    return n1 + n2;
}


// const areYouSure = confirm('Are you sure you want to delete this?')
// console.log(areYouSure);

// alert(sum(20, 40))


// const name = prompt('Enter your name:');
// console.log(name);
document.write(sum(20))
document.write(`<h1>Sum : ${sum(20)}</h1>`)
