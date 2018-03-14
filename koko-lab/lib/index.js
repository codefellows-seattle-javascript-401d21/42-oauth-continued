'use strict';

const mergeSort = require('./mergesort');

let numericArray = [8,7,5,4,3,6,1];

let sortedArray = mergeSort(numericArray);

console.log(numericArray, sortedArray);

