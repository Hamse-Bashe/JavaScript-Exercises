// Exercise 34

const list = document.querySelector('#list');

function insertItem(){
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}

function deleteItem(){
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }else{
        alert("No List Items Left");
    }
}
