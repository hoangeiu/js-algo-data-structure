class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Priority Queue
class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);

    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.values[currentIndex].priority < this.values[parentIndex].priority
    ) {
      this.swap(this.values, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }

    return this.values;
  }

  dequeue() {
    if (!this.values.length) return undefined;
    if (this.values[0].priority < this.values[this.values.length - 1].priority)
      this.swap(this.values, 0, this.values.length - 1);
    let oldRoot = this.values.pop();

    let parentIndex = 0;
    let leftIndex = 2 * parentIndex + 1;
    let rightIndex = 2 * parentIndex + 2;
    while (
      leftIndex < this.values.length &&
      rightIndex < this.values.length &&
      (this.values[leftIndex].priority < this.values[parentIndex].priority ||
        this.values[rightIndex].priority < this.values[parentIndex].priority)
    ) {
      let isLeftSmallerThanRight =
        this.values[leftIndex].priority < this.values[rightIndex].priority;
      if (isLeftSmallerThanRight) {
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

var priorityQueue = new MinBinaryHeap();
priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot wound", 1);
priorityQueue.enqueue("high fever", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);

console.log(priorityQueue.values);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
