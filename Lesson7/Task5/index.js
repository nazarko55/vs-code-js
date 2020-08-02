function squareArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}
console.log(squareArray([12, 33, 67, 6, 77, 8]));