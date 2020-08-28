const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

//algo

//1 read form data after submit
//2 validate email
//3 password validate

const validateEmail = (email) => {
  email.includes('@') ? null : 'Incorrect email';
}
const handleEmail = (event) => {
  const email = event.target.value;
  const error = email ? validateEmail(email) : 'Email required';
  emailErrorElem.textContent = error;
}

emailInputElem.addEventListener('input', handleEmail)

const handlePassword = (event) => {
  const error = event.target.value ? null : 'Password required';
  passwordErrorElem.textContent = error;
}

passwordInputElem.addEventListener('input', handlePassword)

const handleSubmit = (event) => {
  event.preventDeafault();
  const formData =
    JSON.stringify(Object.fromEntries(new FormData(formData)));
  alert(formData);

}
formElment.addEventListener('submit', handleSubmit);