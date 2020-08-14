function finishList() {
  const buttonOneList = document.createElement("li");
  const buttonTwoList = document.createElement("li");
  const buttonThreeList = document.createElement("li");
  const buttonFourList = document.createElement("li");
  buttonOneList.textContent = '1';
  buttonTwoList.textContent = '4';
  buttonThreeList.textContent = '6';
  buttonFourList.textContent = '8';
  const searchList = document.querySelector(".list");
  searchList.append(buttonFourList);
  searchList.prepend(buttonOneList);
  const specLi = document.querySelector('.special');
  specLi.before(buttonTwoList);
  specLi.after(buttonThreeList);
}

export { finishList }