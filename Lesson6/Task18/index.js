const uniqueCount = (arr) => {
  if (!Array.isArray(arr)) return null;
  const uniqueSet = [...new Set(arr)];
  return uniqueSet.length;
}
console.log(uniqueCount([25, 65, 32, 65, 95, 75, 85, 95]));
