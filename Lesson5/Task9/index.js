function isPrimes(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function getPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrimes(i)) {
      console.log(i);
    }
  }
}