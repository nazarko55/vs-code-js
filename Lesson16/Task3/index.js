export function createArrayOfFunctions(number) {

  let arr = [];

  if (typeof number === 'string') {
    return null
  };

  if (number === undefined) {
    return []
  };

  for (let i = 0; i < number; i++) {
    arr[i] = function () {
      return i;
    }
  }

  return arr;

}
console.log(createArrayOfFunctions(5)[7]);