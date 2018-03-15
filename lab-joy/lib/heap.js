/* HEAP DATA STRUCTURE - Our heap is a complete binary tree where numbers are sorted in descending order - the value of all child nodes are less than the value of its parent. */

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

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    // inserts a new node at the end of our tree and tracks parents
    let list = this._insertEnd(node);
    // swaps values around so that the heap is still in descending order
    this._insertSwap(list);
    return this;
  }

  _insertEnd(node) {
    // uses breadth first traversal to find the bottom level and then right-most node without two children; tracks the path to the node via a linked list; inserts our node as a child of this node.
    // O(n) time complexity where n is the number of nodes, as hits the entire tree once. O(n) space complexity where n is the number of nodes, as we are building a new linked list node for each tree node.
    let q = [{ 'node': this.root, 'parent': null }];
    while (q.length) {
      let current = q.shift();
      if (!current.node.left) {
        current.node.left = node;
        return { 'node': node, 'parent': current };
      }
      if (!current.node.right) {
        current.node.right = node;
        return { 'node': node, 'parent': current };
      }
      q.push({ 'node': current.node.left, 'parent': current }, { 'node': current.node.right, 'parent': current });
    }
    // if all nodes have two children, that means we need to start a new level at the left-most node in the tree. We use depth first traversal to find this node, track parents in a linked list, and insert our node as the left child of this node.
    return this._findBottomLeft(node);
  }

  _findBottomLeft(node, current = { 'node': this.root, 'parent': null }) {
    // O(log n) space complexity as we are only checking the leftmost child of each node; it becomes O(n) if the tree is entirely linear with left children. O(n) space complexity as we are creating a new linked list node for each node traversed.
    if (!current.node.left) {
      current.node.left = node;
      return { 'node': node, 'parent': current };
    }
    else return this._findBottomLeft(node, { 'node': current.node.left, 'parent': current });
  }

  _insertSwap(current) {
    // Input node is a linked list with "node" key containing the current node, and a "parent" key linking to the node's parent. We iterate through the list from the bottom node up to the root, comparing the node's value to its parent's value. If the parent's value is smaller than the node's value, we swap the values.
    // O(n) time complexity where n are the nodes in the linked list.
    while (current) {
      if (current.parent === null) return;
      if (current.node.value <= current.parent.node.value) return; 
      let temp = current.node.value;
      current.node.value = current.parent.node.value;
      current.parent.node.value = temp;
      current = current.parent;
    }
  }

  remove() {
    if (!this.root) return null;
    let value = this.root.value;
    if (!this.root.left && !this.root.right) {
      this.root = null;
      return value;
    }
    // Find the end node, swap its value with the root's value, and delete it.
    this._deleteRoot();
    // Now we check the root's new value against its children's values. If the highest child's value is higher than the root's value, we swap the values.
    this._removeSwap();
    // returns the removed node's (previous root's) value
    return value;
  }
  
  _deleteRoot() {
    // We will utilize a breadth first search with a queue. The last node that we shift will be an object containing the rightmost node at the bottom level of the tree and its parent. This is in O(n) time where n is the number of nodes, as it hits each node once. 
    let q = [{'node': this.root, 'parent': null}], end;
    while (q.length) {
      end = q.shift();
      if (end.node.left) q.push({'node': end.node.left, 'parent': end.node});
      if (end.node.right) q.push({'node': end.node.right, 'parent': end.node});
    }
    // We assign the root's value to be the end node's value
    this.root.value = end.node.value;
    // Then we delete the end node
    if (end.node === end.parent.left) end.parent.left = null;
    else if (end.node === end.parent.right) end.parent.right = null;
  }

  _removeSwap(current = this.root) {
    // checks root's child nodes. If the max child node's value is higher than the root's value, swap the values and continue following the root's value down the tree until a swap does not need to be made. This is O(log n) where n is the number of nodes as we are only traversing one child of the node at most, although it can become O(n) if the tree is completely linear.
    if (current.left && current.right) {
      let maxChild = current.left.value > current.right.value ? current.left : current.right;
      if (maxChild.value > current.value) {
        let temp = current.value;
        current.value = maxChild.value;
        maxChild.value = temp;
        this._removeSwap(maxChild);
      }
    }
    else if (current.left) {
      if (current.left.value > current.value) {
        let temp = current.value;
        current.value = current.left.value;
        current.left.value = temp;
        this._removeSwap(current.left);
      }
    }
  }
};