const requestUserData = userId => new Promise((resolve, reject) => {
  (userId === 'broken') ?
    setTimeout(() => {
      reject(new Error('User not found'));
    }, 500) :
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        email: `${userId}@example.com`,
        userId
      });
    }, 1000)
});

requestUserData('broken')
  .catch(error => {
    console.log(error);
    throw new Error('Good');
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));

export { requestUserData };

