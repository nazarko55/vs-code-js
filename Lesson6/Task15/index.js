function includes(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return true;
  }
  return false;
}

console.log(includes([25, 32, 65, 75, 85, 95], 1));