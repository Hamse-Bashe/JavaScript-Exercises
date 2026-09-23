// Exercise 26

// Blocking function
function blockingFunction(){
    alert("Fetching user data");
    const user = {name: "Jama", age: 40};
    console.log(user);
}

blockingFunction();


// // Non blocking function
function nonBlockingfunction(callback){
    // alert("This is blocking function");
    // const user = {name: "Jama", age: 40};
    // console.log(user);
    setTimeout(()=>{
        const user = {name: "Faisal", age: 30};
        callback(user);
    },2000)
}

nonBlockingfunction(function(userData){
    console.log(userData);
});


