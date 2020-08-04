const addPropertyV1 = (userData, userId) => {
  userData.element = userId;
  return userData;
};
const addPropertyV2 = (userData, userId) => {
  const result = Object.assign(userData, { id: userId });
  return result;
};
const addPropertyV3 = (userData, userId) => {
  const result1 = Object.assign({}, userData, { id: userId });
  return result1;
};
const addPropertyV4 = (userData, userId) => {
  const result = Object.assign({ ...userData }, { id: userId });
  return result;
};

const user = {
  name: 'King',

};

console.log(addPropertyV1(user, '0987654321'))
console.log(addPropertyV2(user, ''))
console.log(addPropertyV3(user, '0987654321'))
console.log(addPropertyV4(user, '0987654321'))


