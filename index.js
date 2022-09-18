function add(a, b) {
  return a + b;
}

function fizzBuzz(num) {
  if ( num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  }
  return num.toString();
}

module.exports = {"add": add, "fizzBuzz": fizzBuzz};