// Exercise 35

// Change image function
function changeImage(){
    const image = document.querySelector('#image');

    const imageUrl = prompt("Enter Image URL");
    const borderColor = prompt("Enter Border Color");
    const imageWidth = prompt("Enter Image Width");
    const imageHeight = prompt("Enter Image Height");
    const borderRadius = prompt("Enter Border Radius");

    image.setAttribute('src',imageUrl);
    image.style.padding = "20px";
    image.style.backgroundColor = "#757474";
    image.style.border = `5px solid ${borderColor}`;
    image.style.width = imageWidth;
    image.style.height = imageHeight;
    image.style.borderRadius = borderRadius;
}