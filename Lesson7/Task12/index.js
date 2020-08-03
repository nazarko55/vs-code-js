function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((a, b) => (a + b)) / arr.length;
}
console.log(arrAverage([1, 2, 3, 4, 5, 6, 7]));