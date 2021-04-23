/*
let button1 = document.getElementById("plus").addEventListener("click", increment);
let button2 = document.getElementById("minus").addEventListener("click", decrement);

let i = 0;
function increment() {
    i++;
    document.getElementById("plus").value = i;
};

let x = 100;
function decrement() {
    if (x <= 0) {
    document.getElementById("minus").value = 'Stop';    
    } else {
    x--;
    document.getElementById("minus").value = x;    
    }
}*/

//  another way to write
let button1 = document.getElementById("plus");
let button2 = document.getElementById("minus");

button1.addEventListener("click", increment);
button2.addEventListener("click", decrement);

let i = 0;
function increment() {
    i++;
    button1.value = i;
};

let x = 100;
function decrement() {
    if (x <= 0) {
    button2.value = 'Stop';    
    } else {
    x--;
    button2.value = x;    
    }
}