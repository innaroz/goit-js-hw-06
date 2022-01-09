const form = document.querySelector('form.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = Array(...form.elements).filter((el) => el.nodeName === 'INPUT');
  const isFormFilledOut = inputs.every((input) => input.value.length > 0);

  if (isFormFilledOut) {
    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });
    form.reset();
    console.log(formData);
  } else {
    alert('All fields should be filled out');
  }
});
