// Exercise 30

// operate function
function operate(a,b,callback){
    return callback(a,b);
}

// add function
function add(a,b){
    return a+b;
}
// subtract function
function subtract(a,b){
    return a-b;
}
// multiply function
function multiply(a,b){
    return a*b;
}
// divide function
function divide(a,b){
    return a/b;
}

console.log("Addition: ", operate(5,4,add));
console.log("Subtraction: ", operate(6,2,subtract));
console.log("Multiplication: ", operate(3,4,multiply));
console.log("Division: ", operate(15,5,divide));