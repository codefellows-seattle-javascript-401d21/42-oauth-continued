'use strict';

const mergeSort = require('./mergesort');


let numericArray = [2,1,3,4,8,9,6];

console.log('numericArray before mergesort:', numericArray);
mergeSort(numericArray);
console.log('numericArray after mergesort:',  numericArray);

