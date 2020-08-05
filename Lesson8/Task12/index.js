// algo
// gather all arguments
// multiply

function multiply(...args) {
  console.log(args);
  let res = 1;
  args.forEach(el => {
    res = res * el;
  });
  return res;
}


/////////////////// 2

function multiply(...args) {
  return args.reduce((acc, current) => res * current);
}
const multipleRes = multiply(10, 12, 3, 71, 4, 8);
console.log(multipleRes);



