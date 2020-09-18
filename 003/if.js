// if (2*3 == 8) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }

let num = 50;

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