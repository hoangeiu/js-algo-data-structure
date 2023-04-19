function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length - 1; i > 0; i--) {
    console.log("------------");
    let noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        console.log(arr);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
