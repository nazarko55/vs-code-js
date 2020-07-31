function getPrimes(n) {

  next:
  for (let i = 2; i <= n; i++) {
    for (let k = 2; k <= i; k++) {
      if (i % k === 0) {
        continue next;
      }
    }
    console.log(i);
  }
}

getPrimes(20);