function sum(from, to) {
  return from + to;
}
console.log(sum());
function compareSums(a, b, c, d) {
  let firstSum = sum(a, b);
  let secondSum = sum(c, d);
  return firstSum > secondSum ? true : false;
}
console.log(compareSums()); 
