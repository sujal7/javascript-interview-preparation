// Check whether a given value is an array or not.

function isArray(arr) {
  if (toString.call(arr) === '[object Array]') return true;
  return false;
}

let arr = [1, 2, 3, 5];
let num = 10;

console.log(isArray(arr));
console.log(isArray(num));
