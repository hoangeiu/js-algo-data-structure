// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(arr1 = 0, arr2 = 0) {
  arr1 = arr1.toString();
  arr2 = arr2.toString();
  if (arr1.length !== arr2.length) return false;
  let frequencyArr1 = {};
  for (const num of arr1) {
    frequencyArr1[num] = (frequencyArr1[num] || 0) + 1;
  }
  for (const num of arr2) {
    if (!frequencyArr1[num]) {
      return false;
    } else {
      frequencyArr1[num] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
