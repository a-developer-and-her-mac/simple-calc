const subtraction = require('../subtraction');

test('subtracts two numbers properly', () => {
  expect(subtraction(3,2)).toBe(1);
})