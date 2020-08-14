const squaredNumbers = () => {
  const liElems = document.querySelectorAll('.number');
  console.log([...liElems].map(elem => elem.dataset.number));
  return [...liElems].map((elem, index) => elem.dataset.squaredNumber = [...liElems]
    .map(elem => elem.dataset.number)[index] ** 2);
}

export { squaredNumbers };