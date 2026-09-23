// Exercise 28

// Function that returns Promise
function fetchstudentData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const student = true;

            if(student){
                resolve({stdID: 3674, stdName: "Mohamed Yousuf"});
            }else{
                reject("Failure to fetch student data.")
            }
        },2000)
    })
}


// Using async and await
async function displayStudentData() {
    const student = await fetchstudentData();
    console.log(student);
}

displayStudentData();