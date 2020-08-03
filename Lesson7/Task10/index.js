function sum(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, currentval) => acc + currentval);

}
console.log(sum([1, 2, 3, 45]));