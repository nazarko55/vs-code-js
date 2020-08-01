const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return false;
    }
  }
  return true;
};
const removeDuplicates = arr => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (includes(unique, arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(removeDuplicates([25, 65, 32, 65, 95, 75, 65, 85, 95]))