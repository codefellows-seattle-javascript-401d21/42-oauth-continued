'use strict';

const mergeSort = items => {
  let output = []; //this will hold a copy of the element

  if(items.length < 2)
      return items;

  if(items.length === 2){
    // Extra memory!
    return items[0] < items[1] ? items : items.reverse();
  }

  const middlePoint = Math.floor(items.length / 2);

  //----------------------------------------------------------------------
  // is this the most optimal use of memory?
  const leftSide = mergeSort(items.slice(0,middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));
  //----------------------------------------------------------------------

  while(leftSide.length || rightSide.length){
    //--------------------------------------------------------------------
    // Do we have all the elements on the left?
    if(leftSide.length && !rightSide.length){
      output = output.concat(leftSide); // memory?
      break;
    }
    // Do we have all the elements on the right?
    if(!leftSide.length && rightSide.length){
      output = output.concat(rightSide); //memory?
      break;
    }
    //--------------------------------------------------------------------
    //  We have elements on both sides
    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift()); // memory?
    else
      output.push(rightSide.shift()); // memory
  }
  return output;
};

module.exports = mergeSort;
