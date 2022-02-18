// Reverse the given number.

function reverseNumber(n) {
  let arr = n.toString().split('');
  return arr.reverse().join('');
}

console.log(reverseNumber(79));
console.log(reverseNumber(7912312312));
