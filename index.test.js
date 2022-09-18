const { fizzBuzz } = require('./index');
const obj = require('./index');

test('１と２を渡したとき、３を返す', () => {
  expect(obj.add(1,2)).toBe(3);
});

test("1渡すと文字列'1'を返す", () => {
  const actual = obj.fizzBuzz(1);
  expect(actual).toBe('1');
});

test("2を渡すと文字列’2’を返す", () => {
  expect(obj.fizzBuzz(2)).toBe('2');
});

test("3を渡すと「Fizz」を返す", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
})