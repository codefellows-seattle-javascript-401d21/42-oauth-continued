'use strict';

const mergeSort = items => {
  if(!items) return null;
  if(!Array.isArray(items))return null;
  if(!items.length) return null;

  if(items.length < 2) return items;

  if(items.length === 2) return items[0] < items[1] ? items : items.reverse();

  const middlePoint = Math.floor(items.length / 2);


  // --- demonstrated from lecture --- //
  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));
  //---------------------------------------------------------//

  while(items.length > 0) {
    items.pop();
  }

  while(leftSide.length || rightSide.length) {
    //-------------------------------------
    // only one side has elements
    if(leftSide.length && !rightSide.length) {
      items.push(...leftSide);
      break; // exit while loop
    }
    if(!leftSide.length && rightSide.length) {
      items.push(...rightSide);
      break; // exit while loop
    }
    //-------------------------------------

    // elements on both sides
    if(leftSide[0]<= rightSide[0]) {
      items.push(leftSide.shift());
    } else {
      items.push(rightSide.shift());
    }
  }

  // return the mutated argument array ... not an output array
  return items;
};

module.exports = mergeSort;
