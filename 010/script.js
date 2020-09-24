'use strict'

let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10; 
    console.log(num);
}

showFirstMessage("U son of the bitch!");
console.log(num);




 // Function Declaration (функция может работать до того как объявлена в коде)

 console.log(calc(6,6));
 console.log(calc(12,18));

function calc(a,b) {
    return(a + b);
}

// console.log(calc(6,6));
// console.log(calc(12,18));

function retNumber() {
    let number  = 50;
    return number;
}


let anotherNumber = retNumber();
console.log(anotherNumber);

// Function Expression (функция присваивается в переменную. создается только тогда когда код до нее доходит)

let calcExp = function(a,b) {
    return(a + b);
}

console.log(calcExp(7,7));
console.log(calcExp(17,15));

// Новая Function Expression (стрелочная функция) не имеет контекста вызова

let calcExpArrow = (a,b) => a+b   // если большое выражение то фигурные скобки {}

console.log(calcExp(2,5));
console.log(calcExp(4,8));

// Методы и свойства чисел

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));