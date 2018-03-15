/*
HEAP DATA STRUCTURE
In our heap data structure, we have a complete binary tree where numbers are sorted in descending order - the value of all child nodes are less than the value of its parent. 
* Delete:
    1. Remove the root
    2. Move the number at the end of the line (bottom and then right-most node) to the top. It's now the root.
    3. Check the child numbers - if one is lower, the lowest one swaps with the root/parent.
    4. Recursively check the children and if they're lower, swap the lowest one with the parent.
*/

'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = class Heap {
  constructor() {
    this.root = null;
  }

  /*
  Insert:
    1. Number to be added is inserted at the end of the line (bottom and then right-most node of the tree)
    2. If parent is smaller than number, swap parent and number (child).
    3. Recursively keep doing this until the parent is not smaller than the number.
  */ 
  insert(value) {
    let node = new Node(value);
    // insert the node into the tree and save the parent node
    // do we need to save the parent? what if we just insert and then we DFS traverse again to save the path? 
    let parent = this._insertEnd(node);
    this._insertSwap(node, parent);
    return this;
    // vv make this into a swap helper function
  }

  _insertEnd(node) {
    let parent = null;
    // If the max and min height of each leaf node in the tree is the same, find the bottom left node and insert our node as its left child.
    if (this._findMaxHeight() === this._findMinHeight()) {
      parent = this._findBottomLeft();
      parent.left = node;
    }
    // If the max and minimum heights differ, find the rightmost node in tree. If this node has a left child, insert our node as the right child. Otherwise, it doesn't have any children, so insert our node as the left child.
    else {
      parent = this._findRight();
      if (parent.left) parent.right = node;
      else parent.left = node;
    }
    return parent;
  }

  _insertSwap(node, parent) {
    // if (parent.value < node.value) {
    //   let temp = parent.value;
    //   parent.value = node.value;
    //   node.value = temp;
    // }
  }

  // Root is level 1
  _findMaxHeight(node = this.root) {
    if (!node) return null;
    return 1 + Math.max(this._findMaxHeight(node.right), this._findMaxHeight(node.left));
  }

  _findMinHeight(node = this.root) {
    if (!node) return null;
    return 1 + Math.min(this._findMinHeight(node.right), this._findMinHeight(node.left));
  }

  _findBottomLeft(node = this.root) {
    if (!node.left) return node;
    else return this._findBottomLeft(node.left);
  }
 
  _findRight() {
    let q = [this.root];
    while (q.length) {
      let node = q.shift();
      if (!node.left || !node.right) return node;
      node.push(q.left, q.right);
    }
  }
  
  _findEnd() {
    // We will utilize a breadth first search with a queue. The last node that we shift will be the rightmost node at the bottom level of the tree. This is in O(n) time where n is the number of nodes, as it hits each node once.
    if (!this.root) return null;
    let q = [this.root], end;
    while (q.length) {
      end = q.shift();
      if (end.left) q.push(end.left);
      if (end.right) q.push(end.right);
    }
    return end;
  }

};