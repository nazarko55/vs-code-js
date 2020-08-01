function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i] + delta);
    } else newArray.push(arr[i]);
  }
  return newArray;
}
console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7], 20));