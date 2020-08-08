import { arrAverage } from './index.js'

it('should return an array', () => {
  const result = arrAverage([25, 65, 19, 14, 21, 16, 17]);
  const checkType = typeof result === 'number';
  expect(checkType).toEqual(true)
})
it('should return null if input is string', () => {
  const result = arrAverage('string');
  expect(result).toEqual(null)
})
it('should return an array', () => {
  const result = arrAverage([10, 10, 10]);
  expect(result).toEqual(10)
})