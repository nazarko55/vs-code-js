function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  const result = [];
  arr.map(elem => {
    if (elem % 2 === 0) {
      result.push(elem + delta);
    }
  });
  return result;
}
console.log(increaseEvenEl([3, 4, 5, 6, 7, 8], 10));