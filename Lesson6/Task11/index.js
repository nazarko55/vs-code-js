const numbers = [11, 22, 33, 44, 55, 66];

function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(cloneArr(numbers));