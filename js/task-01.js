const numberOfCategories = document.querySelectorAll('ul#categories li.item h2').length;
console.log(`Number of categories: ${numberOfCategories}`);

document.querySelectorAll('ul#categories li.item').forEach((item) => {
  console.log(`Category: ${item.querySelector('h2').innerText}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
