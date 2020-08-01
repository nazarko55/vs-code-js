function squareArray(arr) {
  if (!Array.isArray(arr)) return null;
  let squareArr = [];
  for (let i = 0; i < arr.length; i++) {
    squareArr.push(arr[i] ** 2);
  }
  return squareArr;
}
console.log(squareArray([12, 4, 6, 9]));