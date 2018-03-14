'use strict';

const mergeSort = require('./mergeSortVer2');

let test = [1,8,5,3,9,7,2];
let test2 = [8,5];


console.log('orignal with 8', mergeSort(test));
console.log('orignal with 2', mergeSort(test2));
