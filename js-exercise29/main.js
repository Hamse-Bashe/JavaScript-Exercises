// Exercise 29

// JSON fetch
async function jsonFileFetch() {
    console.log("Json File Fetch");
    const response = await fetch('data.json');

    const data = await response.json();
    
    console.log(data);
}

jsonFileFetch();