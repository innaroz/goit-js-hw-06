const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.innerText = ingredient;
  li.classList = ['item'];
  return li.outerHTML;
});

document.getElementById('ingredients').innerHTML = list.join('');
