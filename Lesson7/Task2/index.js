const sortDesc = numbers => {
  numbers.sort((a, b) => b - a);

  return numbers;
};
const arr = [12, 45, 89, 90, 43, 67, 81];
console.log(sortDesc(arr));