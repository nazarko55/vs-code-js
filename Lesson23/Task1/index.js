const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequire = value => value
  ? undefined
  : 'Required';

const isEmail = value => value.includes('@')
  ? undefined
  : 'Should be an email';


const validatorsByField = {
  email: [isRequire, isEmail],
  password: [isRequire]
};

const validate = (fieldNmae, value) => {
  const validators = validatorsByField[fieldNmae];
  return validators
    .map(validator => validator(value))
    .filter(erroText => erroText)
    .join(', ')
}

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
}


emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);


const formElment = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElment)]
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {})
};
formElment.addEventListener('submit', onFormSubmit);