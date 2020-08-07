import { calc } from './calculator.js'



it('should get sum expression', () => {
  const result = calc('2 + 3');

  expect(result).toEqual('2 + 3 = 5');
});

it('should get multiplication', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it('should get division', () => {
  const result = calc('4 / 2');

  expect(result).toEqual('4 / 2 = 2');
});

it('should get substraction', () => {
  const result = calc('3 - 2');

  expect(result).toEqual('3 - 2 = 1');
});
it('should return null if argument is not a string', () => {
  const result = calc([5, 6, 7]);

  expect(result).toEqual(null);
});