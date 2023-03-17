// Write a function called sumZero which accpets a sorted array of intergers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero of undefined if a pair
// does not exist
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined
// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]

function sumZero(sortedArray = []) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right];
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]];
    } else if (sum > 1) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
