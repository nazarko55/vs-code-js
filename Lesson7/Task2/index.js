const sortDesc = numbers =>
  numbers.slice().sort((a, b) => b - a);
const arr = [12, 45, 89, 90, 43, 67, 81];
console.log(sortDesc(arr));
console.log(arr);