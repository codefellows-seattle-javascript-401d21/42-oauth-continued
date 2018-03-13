'use strict';

const mergeSort =  require('./lib/mergesort');
const quicksort = require('./lib/quicksort');

let numericArray = [8, 7, 5, 4, 3, 6, 1, 0, 9, 15];
let arrTwo = 'a';

// let sortedArray = mergeSort(numericArray);

// console.log(numericArray ,sortedArray);

quicksort(numericArray);
quicksort(arrTwo);
console.log('quick sorted:', numericArray);
console.log('null array:', arrTwo);



// console.log(mergeSort(numericArray));
