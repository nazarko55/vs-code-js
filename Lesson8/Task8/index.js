
const pickProps = (obj, arr) => {
  let newObj = {};
  for (let key in obj) {
    for (let i of arr) {
      if (i == key) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

const obj = { fiftycent: 1, b: 2, price: 3 };
const arr = ['fiftycent', 'price'];
let result = pickProps(obj, arr);
console.log(result);