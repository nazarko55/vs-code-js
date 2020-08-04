let obj = {
  name: 'Nazar',
  surname: 'Kosov',
  age: 22,
}

function getKeys(obj) {
  let getArrKeys = Object.keys(obj);
  return (getArrKeys.forEach(key => console.log(key)));
}
getKeys(obj);

console.log(getKeys());