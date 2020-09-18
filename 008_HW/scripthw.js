'use strict';

let money = prompt("Ваш бюджет на месяц?","");

let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.obyaz = prompt("Введите обязательную статью расходов в этом месяце", "");

appData.expenses.neobyaz = prompt("Во сколько обойдется?", "");

    // console.log(appData.expenses.obyaz);

    // console.log(appData.expenses.neobyaz);

alert("Бюджет на один день: " + money / 30);
