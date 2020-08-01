const numbers = [11, 22, 44, 55, 66];

function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  let swapArr = []
  for (let i = 1; i <= arr.length; i++) {
    swapArr.push(arr[arr.length - i]);
  }
  return swapArr;
}

console.log(reverseArray(numbers));