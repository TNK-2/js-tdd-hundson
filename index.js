function add(a, b) {
  return a + b;
}

function fizzBuzz(num) {
  if (num % 3 === 0) {
    return 'Fizz';
  }
  return num.toString();
}

module.exports = {"add": add, "fizzBuzz": fizzBuzz};