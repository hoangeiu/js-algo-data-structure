function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      // if (current < arr[j]) {
      //   arr[j + 1] = arr[j];
      // } else if (current >= arr[j] && arr[j + 1] > current) {
      //   arr[j + 1] = current;
      // }
    }
    arr[j + 1] = current;
    // if (current < arr[0]) arr[0] = current;
  }

  return arr;
}

console.log(insertionSort([26, 48, 20, 20, 29, 37, 3, 46, 13, 16, 2, 31]));
console.log(insertionSort([2, 1, 9, 76, 4]));
// [2, 3, 13, 16, 20, 20, 26, 29, 31, 37, 46, 48]
console.log(insertionSort([6, 3, 3, 8]));

// c:: 3
// i 1
// j 0
// [2, 3, 1]
