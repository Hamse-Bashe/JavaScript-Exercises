// Exercise 31

// Function that makes GET request
async function fetchData(){

    try {
        console.log("User Data Fetching Started: ");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }

        // Do this
        const data = await response.json();
        console.log("User data: ",data)

    } catch (error) {
        console.log(error)
    }

}

fetchData();