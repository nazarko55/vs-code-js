const finishForm = () => {
  const pasInput = document.querySelector('input[type = "text"]')
  pasInput.type = 'password';
  const loginInput = document.createElement('input');
  loginInput.type = 'text';
  loginInput.name = 'login';
  const formElem = document.querySelector('.login-form');
  formElem.prepend(loginInput)
};
export { finishForm };