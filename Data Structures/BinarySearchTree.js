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

  remove(value) {
    const minValue = this.minValue;
    let removedNode = undefined;
    function deleteRec(root, value) {
      if (root === null) return root;

      if (value < root.value) {
        root.left = deleteRec(root.left, value);
      } else if (value > root.value) {
        root.right = deleteRec(root.right, value);
      } else {
        if (root.left === null) {
          removedNode = root;
          return root.right;
        } else if (root.right === null) {
          removedNode = root;
          return root.left;
        }
        removedNode = root;
        root.value = minValue(root.right);
        root.right = deleteRec(root.right, root.value);
      }

      return root;
    }
    deleteRec(this.root, value);
    return removedNode;
  }

  minValue(root) {
    let minv = root.value;
    while (root.left) {
      minv = root.left.value;
      root = root.left;
    }
    return minv;
  }

  findSecondLargest() {
    if (!this.root) return undefined;
    let prevRoot = this.root;
    let current = this.root;
    while (current.right) {
      prevRoot = current;
      current = current.right;
    }
    return prevRoot.value;
  }

  isBalanced() {
    function height(root) {
      if (root == null) return 0;
      return Math.max(height(root.left), height(root.right)) + 1;
    }

    function helper(root) {
      if (root == null) return true;

      let leftHeight = height(root.left);
      let rightHeight = height(root.right);
      // debugger;
      if (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        helper(root.left) &&
        helper(root.right)
      )
        return true;

      return false;
    }

    return helper(this.root);
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

// WILD WEST
console.log("---WELCOME TO WILD WEST, READY TO GET CHALLENGE---");

//     15
//  10     20
//1    5      50

//         15
//     10     20
//  1    12      50
//    5

//         15
//     10     20
//  1    12       50
//    5        30     60
//           25           70
//         23
//           24
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log(binarySearchTree.remove(50));
console.log(binarySearchTree);

binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

console.log(binarySearchTree.remove(1));
console.log(binarySearchTree);

binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

console.log(binarySearchTree.remove(10));
console.log(binarySearchTree);

binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true
