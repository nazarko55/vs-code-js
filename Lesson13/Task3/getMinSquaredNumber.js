export default (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) return null
  return Math.pow(Math.min(...arr.map(i => Math.abs(i))), 2);
}
