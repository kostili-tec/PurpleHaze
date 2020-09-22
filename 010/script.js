'use strict'

let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10; 
    console.log(num);
}

showFirstMessage("U son of the bitch!");
console.log(num);

function calc(a,b) {
    return(a + b);
}

console.log(calc(6,6));
console.log(calc(12,18));