function pivot(arr = [], start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivotPoint = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivotPoint >= arr[i]) {
      swap(arr, pivotIndex + 1, i);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, start);
  //   console.log(arr);
  return pivotIndex;
}

// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(pivot([3, 2, 1]));

function quickSort(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // console.log("pivotIndex:", pivotIndex);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
