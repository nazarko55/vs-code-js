const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));
const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));
const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));

const arr = [17.23, '17.35', 'text', 23, 44, NaN, 'NaN', undefined, null];
let result = getParsedIntegersV2(arr)
console.log(result)