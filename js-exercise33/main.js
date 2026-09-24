// Exercise 33

const header = document.querySelector('#header');
// console.log(header)

const text = document.querySelector('#text');
// console.log(text);

function changeContent(){
    header.textContent = "Welcome to JavaScript Course.";
};

function changeText(){
    text.innerHTML = `<strong>JavaScript (JS)</strong>  is a lightweight, high-level, and interpreted programming language used primarily to make web pages interactive and dynamic. Along with HTML (which provides structure) and CSS (which controls styling), JavaScript is one of the three core technologies of the World Wide Web.`;
}

