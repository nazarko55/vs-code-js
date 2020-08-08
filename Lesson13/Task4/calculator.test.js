import calc from './calculator.js';

it('If we will give a string', () => {
  const result = calc([3, 5, 7]);
  expect(result).toEqual(null);
});

it('should get sum expression', () => {
  const result = calc('5 + 5');

  expect(result).toEqual('5 + 5 = 10');
});

it('should get multiplication', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});
it('should get substraction', () => {
  const result = calc('12 - 5');

  expect(result).toEqual('12 - 5 = 7');
});
it('should get division', () => {
  const result = calc('15 / 3');

  expect(result).toEqual('15 / 3 = 5');
});
