const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};

const addPropertyV2 = (userData, userId) => {
  const result = Object.assign(userData, { id: userId });
  return result;
};

const addPropertyV3 = (userData, userId) => {
  const result = Object.assign({}, userData, { id: userId });
  return result;
};

const addPropertyV4 = (userData, userId) => {
  const result = Object.assign({ ...userData }, { id: userId });
  return result;
};

const user = {
  name: 'King',
};

// console.log(addPropertyV1(user, '0987654321'))
// console.log(addPropertyV2(user, '0987654321'))
// console.log(addPropertyV3(user, '0987654321'))
// console.log(addPropertyV4(user, '0987654321'))