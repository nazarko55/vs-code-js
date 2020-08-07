it('17 and of Africa 17', () => {
  expect(17).toEqual(17);
});

it('17 это и вам не 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers =>
  numbers.filter(num => (num % 2 == 0));

it('should get even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

  expect(result).toEqual([2, 4, 6, 8])
})