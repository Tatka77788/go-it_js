const categoriesSelectedById = document.querySelectorAll('#categories li.item');
const result = `В списке ${categoriesSelectedById.length} категории.`;
console.log(result);
categoriesSelectedById.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}\n Количество елементов: ${element.lastElementChild.children.length}`,
  ),
);
