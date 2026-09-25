// Exercise 36
const color = document.querySelector('#color');
const colorPreview = document.querySelector('#colorPreview');
const list = document.querySelector('#list');
const clear = document.querySelector('#clear');


color.addEventListener('change', function(){
    // picked or selected color
    const selectedColor = color.value ;
    // color preview
    colorPreview.style.backgroundColor = selectedColor;
    // adding list item to the document
    const newColor = document.createElement('li');
    // adding color hex to the list iten
    newColor.textContent = selectedColor;
    // styling list item
    newColor.style.color = selectedColor;
    // adding list item to its parent(list)
    list.appendChild(newColor);
})

clear.addEventListener('click', function(){
    // removing selected colors hex
        if(list.lastChild){
            list.removeChild(list.lastChild);
        }
    })
