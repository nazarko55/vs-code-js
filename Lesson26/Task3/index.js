const mult = a => b => a * b;

const twice = mult(2);

const triple = mult(5);

console.log(triple(3));

export { mult, twice, triple };