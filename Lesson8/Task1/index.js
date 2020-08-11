function sum(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(sum([1, 2, 90, 10, 3]));