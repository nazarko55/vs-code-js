const searchBtn = document.querySelector('.search__btn');
searchBtn.addEventListener('click', () => {
  const inputElem = document.querySelector('.search__input');
  console.log(inputElem.value);
});