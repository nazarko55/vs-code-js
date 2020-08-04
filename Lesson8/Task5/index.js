function getKeys(obj) {
  let arrKeys = Object.keys(obj);
  return (arrKeys.forEach(key => console.log(key)));
}
const user = {
  name: 'Alex',
  age: 30,
  married: true,
  children: 'two girls',
}
getKeys(user);

// console.log(getKeys(user).forEach(key => console.log(key)));