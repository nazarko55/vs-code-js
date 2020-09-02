'use strict';
const basseUrl = 'https://5f4f63495b92f4001604e527.mockapi.io/api/v1/123';

const inputs = [...document.querySelectorAll('.form-input')];
const submitBtnElement = document.querySelector('.submit-button');
const errorElement = document.querySelector('.error-text');
const formElem = document.querySelector('.login-form');

const onValid = () => {
  formElem.reportValidity() ?
    submitBtnElement.disabled = false :
    submitBtnElement.disabled = true;
  errorElement.textContent = '';
}

const onsendData = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {})
  console.log(formData);


  fetch(basseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(userData => {
      inputs.map(elem => elem.value = '');
      submitBtnElement.disabled = true;
      alert(JSON.stringify(userData))
    })
    .catch(() => errorElement.textContent = 'Failed to create user');
}

formElem.addEventListener('submit', onsendData);
formElem.addEventListener('input', onValid);
