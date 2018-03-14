'use strict';

const mergeSort = items => {
  if (!items) return null;
  if (!Array.isArray(items)) return null;

  if(items.length < 2)
    return items;

  if(items.length === 2){
    return items[0] < items[1] ? items : items = [items[1], items[0]];
  }

  const middlePoint = Math.floor(items.length / 2);

  //----------------------------------------------------------------------
  // Vinicio - is this the most optimal use of memory?
  const leftSide = mergeSort(items.slice(0,middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));
  //----------------------------------------------------------------------

  while(items.length > 0) {
    items.pop();
  }

  while(leftSide.length || rightSide.length){
    //--------------------------------------------------------------------
    // Vinicio - Do we have all the elements on the left?
    if(leftSide.length && !rightSide.length){
      items.push(...leftSide);
      break;
    }
    // Vinicio - Do we have all the elements on the right?
    if(!leftSide.length && rightSide.length){
      items.push(...rightSide);
      break;
    }
    //--------------------------------------------------------------------
    // Vinicio - We have elements on both sides
    if(leftSide[0] <= rightSide[0])
      items.push(leftSide.shift());
    else
      items.push(rightSide.shift());
  }

  return items;
};

module.exports = mergeSort;
















