// first param +
// second param +
// concat param chetnoe +
// return +

function getSum(a = 5, b = 10) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(getSum());
