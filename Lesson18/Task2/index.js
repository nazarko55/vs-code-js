export const wallet = {
  transaction: [1, 58, 9, 34, 956, 17, 83],
  getMax() {
    return Math.max(...this.transaction);
  },
  getMin() {
    return Math.min(...this.transaction);
  }
}
console.log(wallet.getMax());
console.log(wallet.getMin());