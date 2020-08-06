const getMaxAbsoluteNumber = arr => {
  const absoluteValues = arr
    .map(num => Math.abs(num));
  const max = Math.max(...absoluteValues);
  return max;
}
console.log(getMaxAbsoluteNumber([2, 56, 90, 23, 654]));