function sumInput() {
    let numbers = [];
    while (true) {
      let input = prompt("Введите число", 0);
      if (input === "" || input === null || !isFinite(input)) break;
      numbers.push(+input);
    }
    let total = 0;
    for (let number of numbers) {
      total += number;
      console.log(total);
    }
    return total;
  }
  
  alert(`Сумма значений ${sumInput()}`)
