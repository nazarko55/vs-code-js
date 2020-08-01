let number = [22, 44, 66, 89, 12]
function checker(arr) {
  if (!Array.isArray(arr)) return null;
  let sum = Math.max.apply(null, arr) + Math.min.apply(null, arr);
  return (sum > 1000)

}
console.log(checker([]));