// Remove duplicate values from an array.

// By using filter and indexOf
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// By using Set and Spread operator
function removeDuplicatesBySet(arr) {
  return [...new Set(arr)];
}

let arr = [1, 6, 10, 6, 2, 1];
console.log(removeDuplicates(arr));
console.log(removeDuplicatesBySet(arr));
