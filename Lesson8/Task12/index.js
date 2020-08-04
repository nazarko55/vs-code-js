const compareObjects = (obj1, obj2) => {
  const arr1 = Object.entries(obj1).flat();
  const arr2 = Object.entries(obj2).flat();
  console.log(arr1);
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((elem, i) => elem == arr2[i]);
};

const obj1 = {
  name: 'Bob',
  age: 17,
}
const obj2 = {
  name: 'Bob',
  age: 17,
}

console.log(compareObjects(obj1, obj2));