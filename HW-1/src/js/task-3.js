'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
const CANCELED_BY_USER = 'Отмененно пользоватлем';
const ACCESS = 'Добро пожаловать!';
const ACESS_DENIED = 'Доступ запрещен, неверный пароль';
const userSay = prompt ("ВВедите пароль");
let message;

if (userSay === null){
    message = CANCELED_BY_USER; 

} else if (userSay === ADMIN_PASSWORD){
    message = ACCESS;

}
else {
    message = ACESS_DENIED;

}

alert(message);
