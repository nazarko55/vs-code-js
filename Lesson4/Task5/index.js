let m = 30;
let n = 50;

let result = 0;

for (let i = m; i <= n; i++) {

  if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }

  if (i % 5) {
    console.log(50);
  }
}

