const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  const reverseNum = numbers.map(num => num);
  return reverseNum.reverse();
}

const reverseNumbers = [2, 3, 4, 5, 6];

console.log(reverseArray(reverseNumbers));