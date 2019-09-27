const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function(arr, productName) {
  let price;
  for (let index = 0; index < arr.length; index++) {
    const keys = Object.keys(arr[index]);
    if (arr[index].name === productName) {
      price = arr[index].price * arr[index].quantity;
    }
  }
  return price;
};
console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));
