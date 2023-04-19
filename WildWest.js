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

function bubbleSort(arr, comparator) {
  const swap = (swapArr, idx1, idx2) => {
    [swapArr[idx1], swapArr[idx2]] = [swapArr[idx2], swapArr[idx1]];
  };

  if (typeof comparator !== "function") {
    for (let i = arr.length - 1; i > 0; i--) {
      let noSwap = true;
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
  } else {
    for (let i = arr.length - 1; i > 0; i--) {
      let noSwap = true;
      for (let j = 0; j <= i - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
  }

  return arr;
}

function selectionSort(arr, comparator) {
  const swap = (swapArr, idx1, idx2) => {
    [swapArr[idx1], swapArr[idx2]] = [swapArr[idx2], swapArr[idx1]];
  };

  if (typeof comparator !== "function") {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (i !== min) swap(arr, i, min);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[j], arr[min]) < 0) {
          min = j;
        }
      }
      if (i !== min) swap(arr, i, min);
    }
  }

  return arr;
}

function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = current;
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      for (var j = i - 1; j >= 0 && comparator(arr[j], current) > 0; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = current;
    }
  }

  return arr;
}

function merge(sortedArr1, sortedArr2, comparator) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < sortedArr1.length && j < sortedArr2.length) {
    let isJGreaterThanI;
    if (typeof comparator !== "function") {
      isJGreaterThanI = sortedArr1[i] <= sortedArr2[j];
    } else {
      isJGreaterThanI = comparator(sortedArr1[i], sortedArr2[j]) <= 0;
    }
    if (isJGreaterThanI) {
      result.push(sortedArr1[i]);
      i++;
    } else {
      result.push(sortedArr2[j]);
      j++;
    }
  }

  while (i < sortedArr1.length) {
    result.push(sortedArr1[i]);
    i++;
  }
  while (j < sortedArr2.length) {
    result.push(sortedArr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr = [], comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const swap = (swapArr, idx1, idx2) => {
    [swapArr[idx1], swapArr[idx2]] = [swapArr[idx2], swapArr[idx1]];
  };

  const pivotPoint = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (typeof comparator !== "function") {
      if (pivotPoint >= arr[i]) {
        swap(arr, pivotIndex + 1, i);
        pivotIndex++;
      }
    } else {
      if (comparator(pivotPoint, arr[i]) > 0) {
        swap(arr, pivotIndex + 1, i);
        pivotIndex++;
      }
    }
  }
  swap(arr, pivotIndex, start);
  return pivotIndex;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));

// console.log(bubbleSort([4, 20, 12, 10, 7, 9]));

// console.log(selectionSort([4, 20, 12, 10, 7, 9]));

// console.log(merge([1, 3, 4, 5], [2, 4, 6, 8]));

// function strLength(a, b) {
//   return a.length - b.length;
// }

// console.log(
//   pivot(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], strLength)
// );

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
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

function coinChange(denominations = [], n) {
  let ways = new Array(n + 1).fill(0);

  ways[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    for (let j = 1; j < ways.length; j++) {
      if (denominations[i] <= j) {
        ways[j] = ways[j - denominations[i]] + ways[j];
      }
    }
  }
  return ways[n];
}

// console.log(coinChange([1, 5, 10], 12));

function minCoinChange(coins = [], amount) {
  let result = [];

  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }

  return result;
}

function constructNote(message = "", letters = "") {
  let frequencyLetters = {};
  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];
    frequencyLetters[char] = (frequencyLetters[char] || 0) + 1;
  }

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (frequencyLetters[char]) {
      frequencyLetters[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function findAllDuplicates(array = []) {
  let frequencyArray = {};
  let result = [];
  for (const num of array) {
    frequencyArray[num] = (frequencyArray[num] || 0) + 1;
  }

  for (const key in frequencyArray) {
    if (frequencyArray[key] > 1) result.push(+key);
  }

  return result;
}

function findPair(unsortedArray = [], n) {
  if (!unsortedArray.length) return false;
  let frequencyArray = {};
  for (const num of unsortedArray) {
    frequencyArray[num] = (frequencyArray[num] || 0) + 1;
  }
  // debugger;
  for (const num of unsortedArray) {
    let remain = num - n;
    if (frequencyArray[remain]) return true;
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([0, 1, 13, 2, 2, 4, 5, 6, 8], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
