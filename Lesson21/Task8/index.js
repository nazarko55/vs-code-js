function createButton(buttonText) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = `${buttonText}`;
  const bodyEl = document.querySelector('body');
  return bodyEl.append(buttonEl);
};
console.log(createButton());
export { createButton };