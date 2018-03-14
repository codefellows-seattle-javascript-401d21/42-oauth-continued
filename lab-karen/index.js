'use strict';

// const mergeSort = require('./src/mergesort');
// const quicksort = require('./src/quicksort');
const mergeSortMutate = require('./src/mergesortmutate');

let numericArray = [8,7,5,4,3,6,1];

// let sortedArray = mergeSort(numericArray);
// quicksort(numericArray);

console.log('before', numericArray);
mergeSortMutate(numericArray);
console.log('after', numericArray);
