
// задание 2
// let y = 1; let x = y = 2; 
// console.log(0 || "" || 2 || undefined || true || falsе);


// let a = [1, 2, 3],
//      b = [1, 2, 3];

//      if (a == b) {
//         console.log("Равны")
//      } else {
//          console.log("Не равны")
//      }








// if (2*3 == 8) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }



if (num < 49) {
    console.log("Нет!")
} else if (num > 100) {
    console.log("Многовато!")
} else {
    console.log("Верно")
}

(num == 50) ? console.log("Верно") :  console.log("Нет!");


switch(num) {
    case num < 49:
        console.log("Нет!");
        break;
    case num > 100:
        console.log("Многовато!");
        break;
    case num > 80:
        console.log("Все еще многовато");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Не правильно! Ебаные волки!");
        break;

} 

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue   // или break
    }
    console.log(i)
}


