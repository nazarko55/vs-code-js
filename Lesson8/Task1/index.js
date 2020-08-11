function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((a, b) => (a + b)) / arr.length;
}
console.log(arrAvarage([12, 5, 9, 43, 0]));
/** */

/** */