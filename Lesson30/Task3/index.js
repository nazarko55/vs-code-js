
const makePromise = value => Promise.resolve(value);



export { makePromise };
makePromise(21)
  .then(good =>
    console.log(good));



makePromise(17)
  .then(number => {
    console.log(number); // 17
  });