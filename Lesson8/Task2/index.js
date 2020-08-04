const user = {
  name: 'Tom',
  key: 17,
};

const concatProps = obj => {
  let arr = [];

  for (let key in obj) {
    arr = arr.concat(obj[key]);
  }
  return arr;
}
console.log(concatProps(user));