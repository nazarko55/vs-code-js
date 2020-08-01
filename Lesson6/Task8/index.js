function checkSum(arr) {
  if (!Array.isArray(arr)) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum > 100);
}
console.log(checkSum([17, 45, 39]));
