let m = 20;
let n = 30;
let result = 1;

for (let m = 10; m <= n; m++) {
  if (m % 2 === 1) {
    result *= m;
  }
}

console.log("Result: " + result);
