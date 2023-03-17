// Write a function called maxSubarraySum which accepts an array of integers and
// a number called n. The function should calculate the maximum sum of n consecutive
// elements in the array.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null

function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += array[i];
  }
  max = sum;
  for (let i = num; i < array.length; i++) {
    sum = sum - array[i - num] + array[i];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
