const getTotalPrice = arr => {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return '$' + Math.floor(sum * 100) / 100;
}
const numberArr = [12.55969];
console.log(getTotalPrice(numberArr));