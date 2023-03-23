class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  insert(val) {
    this.values.push(val);

    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(this.values, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
    if (!this.values.length) return undefined;
    if (this.values[0] > this.values[this.values.length - 1])
      this.swap(this.values, 0, this.values.length - 1);
    let oldRoot = this.values.pop();

    let parentIndex = 0;
    let leftIndex = 2 * parentIndex + 1;
    let rightIndex = 2 * parentIndex + 2;
    while (
      leftIndex < this.values.length &&
      rightIndex < this.values.length &&
      (this.values[leftIndex] > this.values[parentIndex] ||
        this.values[rightIndex] > this.values[parentIndex])
    ) {
      let isLeftGreaterThanRight =
        this.values[leftIndex] > this.values[rightIndex];
      if (isLeftGreaterThanRight) {
        this.swap(this.values, leftIndex, parentIndex);
        parentIndex = leftIndex;
      } else {
        this.swap(this.values, rightIndex, parentIndex);
        parentIndex = rightIndex;
      }
      leftIndex = 2 * parentIndex + 1;
      rightIndex = 2 * parentIndex + 2;
    }

    return oldRoot;
  }
}

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// heap.insert(1);
// heap.insert(45);
// heap.insert(199);

console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
// console.log(heap.values);
console.log(heap.extractMax());
// console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
