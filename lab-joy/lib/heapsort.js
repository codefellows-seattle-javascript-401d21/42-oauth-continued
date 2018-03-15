
/* HEAP SORT - The heap sort uses the heap data structure that I constructed and takes in an array of numbers. It returns the same array with the numbers sorted in ascending order. Big O complexity is analyzed in heap.js. */

'use strict';
let Heap = require('./heap');

module.exports = arr => {
  if (!arr.length || !Array.isArray(arr)) return 'Input must be a non-empty array.';
  let heap = new Heap();
  for (let i of arr) {
    if (isNaN(i)) return 'Elements must be numbers.';
    heap.insert(i);
  }
  for (let i = arr.length - 1; i >= 0; i--) 
    arr[i] = heap.remove();
  return arr;
};