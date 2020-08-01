const sortDesc = numbers => {
  function somepare(a, b) {
    if (b < a) {
      return 1;
    }
    return -1;
  }
  numbers.sort(somepare);

  return numbers;
};
const arr = [12, 45, 89, 90, 43, 67, 81];
console.log(sortArray(arr));