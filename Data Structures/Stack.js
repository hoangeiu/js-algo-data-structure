class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO - Last element added to the stack will be the first element removed from the stack
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let current = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return current;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();

console.log(stack);
