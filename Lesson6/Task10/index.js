function reverseArray(arr) {
  if (!Array.isArray(arr)) return null
  let newArray = [1, 3, 5, 7, 9];
  let news = newArray.reverse();
  return news;
}
console.log(reverseArray([]));
