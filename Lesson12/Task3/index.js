function cleanTransactionsList(arr) {
  return arr.filter(i => typeof + i === 'number' && !isNaN(i))
    .map(i => '$' + (+i).toFixed(2));
}
const array = ['  1.9', '2.75 euro', '8.75machine', '  2.12 '];
const res = cleanTransactionsList(array);
console.log(res);
