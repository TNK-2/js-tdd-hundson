function add(a, b) {
  return a + b;
}

function fizzBuzz(num) {
  const canDivideByThree = num % 3 === 0;
  const canDivideByFive = num % 5 === 0;

  if (canDivideByThree && canDivideByFive) {
    return 'FizzBuzz';
  } else if (canDivideByFive) {
    return 'Buzz';
  } else if (canDivideByThree) {
    return 'Fizz';
  }
  return num.toString();
}

module.exports = {"add": add, "fizzBuzz": fizzBuzz};