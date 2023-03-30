function countZeroes(nums = []) {
  let count = 0;
  for (const num of nums) {
    if (num === 0) count++;
  }
  return count;
}

function sortedFrequency(nums, value) {
  let count = 0;
  for (const num of nums) {
    if (num === value) count++;
  }
  return count || -1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
