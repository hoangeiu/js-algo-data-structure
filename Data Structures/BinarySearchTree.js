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

  BFS() {
    var data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFS_PreOrder() {
    var data = [],
      current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }

  DFS_PostOrder() {
    var data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);

    return data;
  }

  DFS_InOrder() {
    var data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
}

//      10
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

// console.log(tree.find(20));
// console.log(tree.find(12));

console.log(tree.BFS());

console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PostOrder());
console.log(tree.DFS_InOrder());

console.log(tree);
