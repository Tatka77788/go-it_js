'use strict';

const total = 100;
const ordered = 50;
let userChoice = prompt('Введите нужное количество товаров');
let message;
if(userChoice>100) {
  message='На складе недостаточно товаров';
} else {
    message='Заказ оформлен, с вами свяжется менеджер';
};
console.log(message);
