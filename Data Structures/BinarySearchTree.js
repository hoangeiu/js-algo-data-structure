class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val === current.value) found = true;
      else if (val > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

//     10
//   6       15
// 3   8  13    20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(13);
tree.insert(8);
tree.insert(3);
tree.insert(20);

console.log(tree);

console.log(tree.find(20));
console.log(tree.find(12));
