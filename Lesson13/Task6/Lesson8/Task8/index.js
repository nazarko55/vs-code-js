export function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, elem) => (acc + elem)) / arr.length;
}
const numbers = [25, 65, 19, 14, 21, 16, 17];
console.log(arrAverage(numbers));