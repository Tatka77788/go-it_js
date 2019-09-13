'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let countDroid = 6;
const CANCEL = 'Отмененно пользователем!';
const OVER_LIMIT = 'Недостаточно средств на счету';

const userRequest = prompt ('Введите количество дроидов, которые хотите приобрести');

if (userRequest === null){
    alert = ('Отменено пользователем!');
} 
let totalPrice = pricePerDroid + (pricePerDroid * countDroid);
console.log ("Total:", totalPrice);
let balance = credits - totalPrice;
console.log (balance);
if (totalPrice > credits){
    alert = ('Недостаточно средств на счету');
} else {
    console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`);
}
