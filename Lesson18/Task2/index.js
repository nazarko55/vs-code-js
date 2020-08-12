export const wallet = {
  transactions: [1, 58, 9, 34, 956, 17, 83],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
}
console.log(wallet.getMax());
console.log(wallet.getMin());