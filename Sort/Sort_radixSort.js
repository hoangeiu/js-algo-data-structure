function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr = []) {
  for (let i = 0; i < mostDigits(arr); i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      buckets[getDigit(arr[k], i)].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(
  radixSort([
    3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743,
    4127,
  ])
);
