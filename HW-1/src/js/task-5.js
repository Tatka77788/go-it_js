let china = 'Китай' ;
let chille = 'Чили';
let australia = 'Австралия';
let india = 'Индия';
let jamaika = 'Ямайка';

let chinaPrice = '100';
let chillePrice = '250';
let australiaPrice = '170';
let indiaPrice = '80';
let jamaikaPrice = '120';

let userChoise = prompt('Укажите вашу страну');
let message;

if (userChoise === null){
    message = 'Отмененно пользователем';
    debugger;
} else { 
 const inLowerCase = userChoise.toLowerCase();
 const inUpperCase = userChoise.toUpperCase();
 console.log(inLowerCase);
 console.log(inUpperCase);
 console.log(userChoise);  
switch (userChoise) {
        case 'Китай':
            message = `Доставка в ${userChoise} будет стоить ${chinaPrice}  кредитов.`;
            break;
        
        case 'Чили':
            message = `Доставка в ${userChoise} будет стоить ${chillePrice} кредитов.`;
            break;
           
         case 'Австралия':
            message = `Доставка в ${userChoise} будет стоить ${australiaPrice} кредитов.`;
            break;
           
         case 'Индия':
            message = `Доставка в ${userChoise} будет стоить ${indiaPrice} кредитов.`;
            break;
           
         case 'Ямайка' :
            message = `Доставка в ${userChoise} будет стоить ${jamaikaPrice} кредитов.`;
            break;

         default:
              message = 'В вашей стране доставка не доступна'
}
}

alert(message);