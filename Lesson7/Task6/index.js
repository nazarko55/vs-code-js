function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  arr.reverse();
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 67]));