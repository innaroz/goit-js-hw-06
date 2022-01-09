document.getElementById('validation-input').addEventListener('blur', (e) => {
  const input = e.target;
  const validTextLength = input.dataset.length;

  if (input.value.length === Number(validTextLength)) {
    input.classList = ['valid'];
  } else {
    input.classList = ['invalid'];
  }
});
