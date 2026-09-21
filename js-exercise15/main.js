// Exercise 15

let people = [
    {name: "Jama", age: 25, city: "Jigjiga"},
    {name: "Faisal", age: 26, city: "Hargeisa"},
    {name: "Abdinur", age: 29, city: "Mogadisho"}
]

console.log("Properties and values of each person: ")
for(let person of people){
    for(key in person){
        console.log(key+": "+person[key]);
    }
    console.log("---")
}