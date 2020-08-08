import { getAdults } from './index.js';

describe('arrayContaining', () => {
  const expected = ['Kate', 'Venom'];
  it('matches even if received contains additional elements', () => {
    expect(['Kate', 'Venom', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Venom', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const expected = [100, 50, 300, 5];
  it('matches even with an unexpected number 300', () => {
    expect([50, 100, 300, 5, 50, 5]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match without an expected number 2', () => {
    expect([100, 100, 300, 50, 5]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});