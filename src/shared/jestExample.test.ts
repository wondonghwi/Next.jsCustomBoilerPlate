import sum from '@shared/jestExample';

test('1과 2를 더하면 3', () => {
  expect(sum(1, 2)).toBe(3);
});
