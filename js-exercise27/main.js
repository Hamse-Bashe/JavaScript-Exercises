// Exercise 27

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

fetchstudentData()
    .then((student)=>{ console.log("Student Data: ",student)})
    .catch((error)=> { console.log(error)})
