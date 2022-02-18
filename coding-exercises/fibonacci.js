// Display number at given index of fibonacci series.

function getFibonacci(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

console.log(getFibonacci(1));
console.log(getFibonacci(5));
console.log(getFibonacci(10));
console.log(getFibonacci(9));
console.log(getFibonacci(8));
