'use strict';

//const mergeSort = require('./merge-sort')
const quickSort = require('./quick-sort')

let numbers = [8, 7, 6, ,5 ,4, 4, 2, 1];
// let sortedArray = mergeSort(numbers);
quickSort(numbers)
console.log(numbers)
//console.log(numbers, sortedArray);