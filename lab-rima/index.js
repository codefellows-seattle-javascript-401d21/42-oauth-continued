'use strict';

const mergeSort = require('./lib/mergesort');

try{
  let a = [9,8,7,6,5];
  mergeSort(a);
  console.log('\n---Example---\nmergeSort([9,8,7,6,5]) should sort an original input array to\n', a);

  console.log('\n---ERROR example---\nif an input is not array -> mergeSort(""), throws an error message:');
  mergeSort('');
}catch(err){
  console.log(err.message, '\n\n');
}
