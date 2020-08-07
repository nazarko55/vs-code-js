import getMinSquaredNumber from './getMinSquaredNumber.js';

it('If we will give an empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('If we will give a string', () => {
  const result = getMinSquaredNumber('hubabuba')
  expect(result).toEqual(null);
});

it('should get a square of a min abs number', () => {
  const result = getMinSquaredNumber([-6, -13, -2, -8]);
  expect(result).toEqual(4);
});