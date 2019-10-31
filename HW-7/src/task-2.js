const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(item => {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById('ingredients').appendChild(li);
});
