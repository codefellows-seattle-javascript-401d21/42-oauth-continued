'use strict';

const sort_algorithms = module.exports = {};

sort_algorithms.radixSort = itemArray => {
  if(itemArray === null) return null;
  if (!itemArray || !Array.isArray(itemArray)) throw new Error('Type error: expecting array');
  if (itemArray.length < 2) return itemArray;

  let digitArray;
  let sortedArray;
  let sorted = false;
  let base = 1;

  while (!sorted){
    digitArray = [];
    for(let i in itemArray){
      let digit = Math.floor((itemArray[i] / base) % 10);
      if (!digitArray[digit] ) digitArray[digit] = [];
      digitArray[digit].push(itemArray[i]);
    }
    
    if (digitArray.length === 1 && digitArray[0]) sorted = true;

    if (sorted) break;
    sortedArray = [];
    for(let i in digitArray){
      sortedArray.push(...digitArray[i]);
    }
    base = base * 10;
  }

  return sortedArray;
};




