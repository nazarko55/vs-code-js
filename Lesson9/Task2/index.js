const user = {
  name: 'Taras',
  age: 18,
  key: 2,
}
const copyObj = obj => {
  const player = { ...user };
  return player;
}
console.log(copyObj());