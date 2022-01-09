const input = document.getElementById('font-size-control');

const setFontSize = (size) => {
  document.getElementById('text').style.fontSize = `${size}px`;
};

input.addEventListener('change', (e) => {
  setFontSize(input.value);
});

setFontSize(input.value);
