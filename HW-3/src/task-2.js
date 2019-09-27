let counter = 0;

function countProps(obj) {
  let keys = Object.keys(obj);
  return (counter = keys.length);
}
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
