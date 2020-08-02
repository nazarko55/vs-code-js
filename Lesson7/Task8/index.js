const cloneArr = arr => {
  if (!Array.isArray(arr)) return null;
  return arr.slice();
}

console.log(cloneArr([1, 'JS', 'react', 'English']));  