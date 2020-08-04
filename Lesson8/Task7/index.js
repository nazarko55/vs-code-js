let obj1 = {
  name: 'Anton',
  surname: 'Vorotnikov1',
  age: 26,
}

let obj2 = {
  name: 'Mikhail',
  surname: 'Vorotnikov2',
  age: 23,
}

function mergeObjectsV1(obj1, obj2) {
  let res = Object.assign({}, obj1, obj2);
  return res;
}
console.log(mergeObjectsV1(obj1, obj2));

function mergeObjectsV2(obj1, obj2) {
  let rest = Object.assign({}, obj2, obj1);
  return rest;
}
console.log(mergeObjectsV2(obj1, obj2));

const mergeObjectsV3 = (obj1, obj2) => {
  const result = { ...obj1, ...obj2 };
  return result;
};
console.log(mergeObjectsV3(obj1, obj2));

const mergeObjectsV4 = (obj1, obj2) => {
  const result = { ...obj2, ...obj1 };
  return result;
};
console.log(mergeObjectsV4(obj1, obj2));

