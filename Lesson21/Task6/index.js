function setButton(buttonText) {
  return document.querySelector('body').innerHTML = `<button>${buttonText}</button`
}
console.log(setButton('button text'));
export { setButton }
