const user = {
  name: 'Taras',
  age: 18,
  key: 2,
}
const copyObj = obj => {
  return { ...user };
}
console.log(copyObj());