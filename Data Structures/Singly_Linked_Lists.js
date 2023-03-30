class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var preNode = current;
    while (current.next) {
      preNode = current;
      current = current.next;
    }
    this.tail = preNode;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    var node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    let node = new Node(value);
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let prevNode = this.get(index - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length -= 1;
    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let nextNode = null;
    let prevNode = null;
    while (node) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return this;
  }

  rotate(time) {
    if (time > 0) {
      for (let i = 0; i < time; i++) {
        let current = this.head;
        this.head = current.next;
        this.tail.next = current;
        this.tail = current;
        current.next = null;
      }
    } else if (time < 0) {
      for (let i = time; i < 0; i++) {
        let current = this.tail;
        let prevTail = this.get(this.length - 2);
        this.tail = prevTail;
        this.tail.next = null;
        current.next = this.head;
        this.head = current;
      }
    }

    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("SEE");
list.push("YOU");
list.push("LATER");

// list.pop();
// list.shift();
// console.log(list.unshift("HI"));
// console.log(list.get(0));
// console.log(list.set(4, "TOMORROW"));

// console.log(list.insert(0, "CHAO"));
// console.log(list.insert(1, "THERE"));
// console.log(list.insert(4, ":)"));

// console.log(list.remove(3));

// list.reverse();

list.rotate(-2);

console.log(list);

console.log(list.traverse());
