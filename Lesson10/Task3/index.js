const multiRound = (num, accuracy) => [
  Math.floor((num) * (10 ** accuracy)) / 10 ** accuracy,
  Math.round((num) * (10 ** accuracy)) / 10 ** accuracy,
  Math.ceil((num) * (10 ** accuracy)) / 10 ** accuracy,
  Math.trunc((num) * (10 ** accuracy)) / 10 ** accuracy, +num.toFixed(accuracy)

]
console.log(multiRound(11.678, 3));