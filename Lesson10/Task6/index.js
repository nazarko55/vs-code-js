const getRandomNumbers = (len, start, ends) => {
  if (Math.floor(start) >= Math.floor(ends)) return null;
  let randomNum = Array(len).fill().map(len => Math.floor(Math.random() * (start - ends + 1) + ends))
  return randomNum;
}
console.log(getRandomNumbers(5, 1, 9, 9, 9));