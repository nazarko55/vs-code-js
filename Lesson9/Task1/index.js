const getAdults = usersObj => Object.entries(usersObj)
  .filter(user => user[1] >= 18)
  .map(user => user[0]);

const users = {
  'Tom': 17,
  'John': 22,
  'Baba': 19,
};
console.log(getAdults(users));