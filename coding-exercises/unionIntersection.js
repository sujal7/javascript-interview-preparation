// Find union and intersection of two arrays

let arrFirst = [1, 6, 10, 12, 15, 20];
let arrSecond = [5, 6, 10, 2, 44, 20];

function getUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function getIntersection(arr1, arr2) {
  return arr1.filter((item, index) => {
    return arr2.includes(item);
  });
}

console.log(getUnion(arrFirst, arrSecond));
console.log(getIntersection(arrFirst, arrSecond));
