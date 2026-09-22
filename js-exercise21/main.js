// Exercise 21

// Creating numbers array
let numbers = [1,2,3,4,5];

// Using Reduce method to multiply all numbers in numbers array
let multipliedNumbers = numbers.reduce((total, number)=> total * number , 1);

console.log(multipliedNumbers);
