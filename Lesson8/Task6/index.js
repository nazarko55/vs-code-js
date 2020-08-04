const obj = {
  name: "Tom",
};
let newKey = "age";
let newValue = 17;
const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
console.log(addPropertyV1(obj, newKey, newValue));
const addPropertyV2 = (obj, key, value) => {
  Object.assign(obj, { [key]: value });
  return obj;
};
console.log(addPropertyV2(obj, newKey, newValue));
const addPropertyV3 = (obj, key, value) => {
  let clone = Object.assign({}, obj);
  Object.assign(clone, { [key]: value });
  return clone;
};
console.log(addPropertyV3(obj, newKey, newValue));
const addPropertyV4 = (obj, key, value) => {
  let clone = { ...obj };
  Object.assign(clone, { [key]: value });
  return clone;
};
console.log(addPropertyV4(obj, newKey, newValue));