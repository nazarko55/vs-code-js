//

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}
function addPropertyV2(userData, userId) {
  //input: Object
  //output: object
  Object.assign(userData, { id: userId });
  return userData;
}
function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });

}
function addPropertyV4(userData, userId) {
  userData.id = userId;
  return userData;
}

const obj = {

  name: 'Andrey',
  age: 100,
  city: 'test',
}

console.log(addPropertyV1(obj, '2222'));
console.log(addPropertyV2(obj, '333'));
console.log(addPropertyV3(obj, '5555'));
console.log(addPropertyV4(obj, '22666622'));

