let input;
let total = 0;

do {
    input = prompt('Веддите число');
    const userNumber = Number(input);
    console.log(userNumber);
    total += userNumber;
    console.log(total);
} while (input !== null);

alert (`Сумма значений ${total}`);