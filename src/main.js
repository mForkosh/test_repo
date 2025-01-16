function cipher(input, pass) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    result += String.fromCharCode(input.charCodeAt(i) ^ pass);
  }

  return result;
}

let password;

document.body.addEventListener('submit', (eventData) => {
  eventData.preventDefault()
  const form = document.forms.deCoder;
  const inputText = form.elements.textToCode;
  const outPut = form.elements.outPut;
  const inputPassword = form.elements.password;

  if (isNaN(parseFloat(inputPassword.value))) {
    outPut.value = 'Пароль должен состоять только из чисел!!!'
    return;
  }

  if (inputText.value.length === 0) {
    outPut.value = 'Для начала работы введите текст в поле слева!'
    return;
  }
  password = parseFloat(inputPassword.value)

  outPut.value = cipher(inputText.value, password);
})
