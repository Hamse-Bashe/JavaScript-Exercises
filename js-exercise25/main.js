// Exercise 25

// 1. Spread operator
let numbers = [1,2,3];
let allNumbers = [...numbers,4,5,6];

console.log(allNumbers);

// 2. Rest operator
function multiply(...numbers){
    return numbers.reduce((total, num)=> total * num , 1);
}

console.log(multiply(4,5,6));
