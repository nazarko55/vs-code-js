const textInput = document.querySelector('.text-input');
const inputText = (event) => {
  console.log(event.target.value);
};
textInput.addEventListener('change', inputText);