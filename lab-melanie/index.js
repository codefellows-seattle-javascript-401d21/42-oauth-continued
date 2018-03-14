'use strict';

const mergeSort =  require('./lib/mergeSort');
const quicksort = require('./lib/quickSort');

let numericArray = [8, 7, 5, 4, 3, 6, 1, 0, 9, 15];

// let sortedArray = mergeSort(numericArray);

// console.log(numericArray ,sortedArray);
console.log('merge sorted', mergeSort(numericArray));

quicksort(numericArray);

console.log('quick sorted:', numericArray);
