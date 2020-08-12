export function argsSum() {
  return [...arguments].reduce((acc, elem) => acc += elem * elem, 0);

}

console.log(argsSum(1, 4, 8, 5));