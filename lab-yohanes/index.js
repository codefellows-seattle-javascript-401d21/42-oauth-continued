'use strict';

const mergeSort = require('./merge-sort')

let numbers = [8, 7, 6, ,5 ,4, 4, 2, 1];
let sortedArray = mergeSort(numbers);
console.log(numbers, sortedArray);