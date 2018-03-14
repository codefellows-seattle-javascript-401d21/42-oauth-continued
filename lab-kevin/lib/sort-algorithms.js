'use strict';

const sort_algorithms = module.exports = {};

sort_algorithms.radixSort = itemArray => {
  //return null for null
  if(itemArray === null) return null;

  //throw error for undefined or arguments that are not arrays
  if (!itemArray || !Array.isArray(itemArray)) throw new Error('Type error: expecting array');
  
  //return arrays that have less than two items  
  if (itemArray.length < 2) return itemArray;

  //return arrays that have less than two items  
  if (itemArray.length === 2){
    if (itemArray[0] < itemArray[1] ) return itemArray;
    let temp = itemArray[0];
    itemArray[0] = itemArray[1];
    itemArray[1] = temp;
    return itemArray;
  } 
  
  let digitArray;
  let sorted = false;
  //initial base - ones place
  let base = 1;

  while (!sorted){  //**** the while loop is O(n);  n being the length of the longest count of digits in for a number in the array 
    digitArray = [];

    //create a basic hash table using the base digit as the key
    itemArray.forEach(num => {  //**** forEach is O(n)

      //get a digit that correlates to the base
      // a number smaller than the base returns 0
      // base changes for every iteration of the while loop by a factor of ten => 1, 10 100, 1000 
      let digit = Math.floor((num / base) % 10);

      //use the digit as the target index of the array 
      //push each value to an index
      if (!digitArray[digit] ) digitArray[digit] = [];
      digitArray[digit].push(num);
    });

    //when all the values end up in the first index, the array is sorted
    if (digitArray.length === 1 && digitArray[0]) sorted = true;

    //stop the iteration
    if (sorted) break;

    itemArray = [];
    //create a one dimensional array from the hash table
    for(let i in digitArray){ //****  O(n) 
      itemArray.push(...digitArray[i]); 
    }
    //increment the base
    base = base * 10;
  }

  return itemArray;
};

///***** OVERALL O(wn) => w = the longest number, n = length of array




