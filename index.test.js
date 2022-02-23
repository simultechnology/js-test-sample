let add = require('./index');

test('when 1 and 2 are passed, then return 3', () => {
  expect(add(1, 2)).toBe(3);
});