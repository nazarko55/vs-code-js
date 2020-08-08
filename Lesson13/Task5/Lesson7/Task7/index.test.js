import { reverseArray } from './index.js';

it('should return an array', () => {
  const result = reverseArray([2, 3, 4, 5, 6]);
  const checkType = Array.isArray(result);
  expect(checkType).toEqual(true)
});
it('should check array length', () => {
  const result = reverseArray([2, 3, 4, 5, 6]);
  expect(result.length).toEqual(5)
});
it('should check of array type number', () => {
  const result = reverseArray([2, 3, 4, 5, 6]);
  const checkTypeNumber = result.every(i => typeof i === 'number')
  expect(checkTypeNumber).toEqual(true)
});