// Exercise 9

// Creating object
let car = {
    make : "Tesla",
    model : "Tesla Model S",
    year : 2026
}

// Before
console.log(car);

// Adding start method to the car object
car.start = function(){
    console.log("The car has started");
}

// After
console.log(car);

