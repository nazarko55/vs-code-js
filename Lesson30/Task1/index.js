

const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNum1 = getValueWithDelay(62, 1000);
const asyncNum2 = getValueWithDelay(34, 2000);
const asyncNum3 = getValueWithDelay('89', 3000);

const getSum = numbers =>
  numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))


    .catch(() => Promise.reject(new Error('Cant\'t calculate')));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3)
  .then(result => console.log(result))

export { asyncSum };