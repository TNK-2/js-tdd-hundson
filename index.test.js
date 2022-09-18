const add = require('./index');

test('１と２を渡したとき、３を返す', () => {
  expect(add(1,2)).toBe(3);
})