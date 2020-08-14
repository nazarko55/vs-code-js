function getTitleElement() {
  let titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

function getInputElement() {
  let inputElem = document.querySelector('input[type = "text"]');
  console.dir(inputElem);
  return inputElem;
}
getTitleElement();
getInputElement();

export { getTitleElement, getInputElement };