function merge(sortedArr1 = [1, 10, 50], sortedArr2 = [2, 14, 99, 100]) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] <= sortedArr2[j]) {
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

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
