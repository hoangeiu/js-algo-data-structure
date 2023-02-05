// Write a function called same, which accpets two arrays. The function should
// return true if every value in the array has it's corresponding value squared
// in the second array. The frequency of values must be the same.
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyArr1 = {};
  let frequencyArr2 = {};
  arr1.forEach((e) => {
    frequencyArr1[e] = (frequencyArr1[e] || 0) + 1;
  });
  arr2.forEach((e) => {
    frequencyArr2[e] = (frequencyArr2[e] || 0) + 1;
  });
  for (const key in frequencyArr1) {
    if (!(key * key in frequencyArr2)) {
      return false;
    }
    if (frequencyArr1[key] !== frequencyArr2[key * key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
