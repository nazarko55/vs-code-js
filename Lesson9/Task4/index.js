const dayTransaction = [
  { userId: 22, amount: 55, operation: 'sell' },
  { userId: 38, amount: 210, operation: 'sell' },
  { userId: 274, amount: 112, operation: 'sell' },
]

function getTotalRevenue(arr) {
  return dayTransaction.map((el) => el.amount).reduce((a, b) => a + b);
}
console.log(getTotalRevenue());
