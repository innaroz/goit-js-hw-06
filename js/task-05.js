document.getElementById('name-input').addEventListener('keyup', (e) => {
  const value = e.target.value;
  const nameEl = document.getElementById('name-output');

  if (value) {
    nameEl.innerText = value;
  } else {
    nameEl.innerText = 'Anonymous';
  }
});
