
const concatProps = obj => {
  let arr = [];

  for (let key in obj) {
    arr.push(obj[key])
    //arr = arr.concat(obj[key]);
  }
  return arr;
}

const user = {
  name: 'John Doe',
  key: 17,
  interest: 'football'
};

console.log(concatProps(user));