class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const new_Node = new Node(data);
    if (!this.root) {
      this.root = new_Node;
    } else {
      this.insertNode(this.root, new_Node);
    }
  }

  insertNode(node, new_Node) {
    if (new_Node.data < node.data) {
      if (node.left === null) {
        node.left = new_Node;
      } else {
        this.insertNode(node.left, new_Node);
      }
    } else {
      if (node.right === null) {
        node.right = new_Node;
      } else {
        this.insertNode(node.right, new_Node);
      }
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, value) {
    // If Root Node is Empty
    if (!node) {
      return `Binary Tree Doesn't Exist`;
    }
    // Checking the value in BST
    else if (node.data > value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (node.data < value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      // Deleting node with  no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
    }
    // Deleting Node with only one children left or right
    if (node.left === null) {
      node = node.right;
    }
    if (node.right === null) {
      node = node.left;
    }
    // Deleting node  with two child
    var aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.deleteNode(node.right, aux.data);
    return node;
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.data);
    }
  }
}

const BST = new BinaryTree();

BST.insert(12);
BST.insert(11);
BST.insert(13);
console.log(BST.getRootNode());
// BST.delete(11)
// BST.delete(12);
let root = BST.getRootNode();
console.log(BST.getRootNode());
console.log(BST.postorder(root))