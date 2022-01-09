let counterValue = 0;

const showCounterValue = () => {
  document.getElementById('value').innerHTML = counterValue;
};

document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
  counterValue += 1;
  showCounterValue();
});

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
  counterValue -= 1;
  showCounterValue();
});

showCounterValue();
