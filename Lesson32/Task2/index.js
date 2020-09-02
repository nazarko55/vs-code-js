const baseUrl = 'https://5f4f63495b92f4001604e527.mockapi.io/api/v1/users';

const getUsersList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
};

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => response.json())
};

const createUser = (userObj) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj)
  })
};

//const newUserData = {
//email: "cool@email.com",
//firstName: 'Iron',
//lastName: 'Man',
// age: 42,
//};
//createUser(newUserData)
//  .then(() => console.log('User created'));


function updateUser(userId, userObj) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj)
  })
};


const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  })
};

export { deleteUser, updateUser, createUser, getUserById, getUsersList };
