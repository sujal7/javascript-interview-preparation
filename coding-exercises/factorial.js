// Display factorial of given number.

let n = 5;

function getFactorial(n) {
  let result = 1;
  while (n >= 1) {
    result *= n;
    n--;
  }
  return result;
}

console.log('Factorial = ' + getFactorial(n));
