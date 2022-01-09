function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const width = 30;
const height = 30;

const boxes = document.getElementById('boxes');

document.querySelector('button[data-create]').addEventListener('click', () => {
  // boxes
  const boxesCount = document.querySelector('input').value;

  const elements =[...new Array(Number(boxesCount))].map((_el, index) => {
    const div = document.createElement('div');
    div.style.width = `${width + (index * 10)}px`;
    div.style.height = `${height + (index * 10)}px`;
    div.style.backgroundColor = getRandomHexColor();

    return div.outerHTML;
  })
  boxes.innerHTML = elements.join('');
});

document.querySelector('button[data-destroy]').addEventListener('click', () => {
  boxes.innerHTML = '';
});
