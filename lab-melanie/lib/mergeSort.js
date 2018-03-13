'use strict';

const mergeSort = items => {
  let output = []; // this will hold a copy of the elements

  // TODO: finish validation
  if(items.length < 2) return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse(); // extra memory used

  const middlePoint = Math.floor(items.length / 2);
  console.log('middlePoint', middlePoint);
  // not the most effective use of memory
  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));
  console.log('leftSide:', leftSide);
  console.log('rightSide:', rightSide);

  while(leftSide.length || rightSide.length) {
    //-------------------------------------
    // only one side has elements
    if(leftSide.length && !rightSide.length) {
      output = output.concat(leftSide);
      break; // exit while loop
    }
    if(!leftSide.length && rightSide.length) {
      output = output.concat(rightSide);
      break; // exit while loop
    }
    //-------------------------------------

    // elements on both sides
    if(leftSide[0]<= rightSide[0]) {
      output.push(leftSide.shift());
    } else {
      output.push(rightSide.shift());
    }
  }
  return output;
};

module.exports = mergeSort;
