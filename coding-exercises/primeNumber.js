// Check if the number is prime or not.

let num = 113;

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(num));
console.log(isPrime(6));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(7));
