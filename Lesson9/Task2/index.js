const user = {
  name: 'Tom',
  key: 17,
  height: 1.85,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(user));
console.log(user);