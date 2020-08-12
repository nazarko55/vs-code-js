export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc += elem * elem, 0);

}

console.log(sumOfSquares(1, 4, 8, 5));