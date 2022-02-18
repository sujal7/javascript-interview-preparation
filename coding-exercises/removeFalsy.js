// Remove falsy values from array.

let arr = [0, 1, false, 2, '', 3, 'a', 'e', 23, NaN, 's', 34];

function removeFalsyValues(arr) {
  return arr.filter((item, index) => {
    return item;
  });
}

console.log(removeFalsyValues(arr));
