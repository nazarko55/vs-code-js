
function getAdults(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
let obj = {
  'John Doe': 19,
  'Tom': 17,
  'Bob': 16,
};

let result = getAdults(obj);
console.log(result);