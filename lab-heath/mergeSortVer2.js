'use strict';

const mergeSort = items => {

  if (!items || !Array.isArray(items)) return null;
  if(items.length < 2) return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : [items[1], items[0]];

  const middlePoint = Math.floor(items.length / 2);

  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));

  items = [];

  while(leftSide.length || rightSide.length) {
    if(leftSide.length && !rightSide.length) {
      items = items.concat(leftSide);
      break;
    }
    if(!leftSide.length && rightSide.length) {
      items = items.concat(rightSide);
      break;
    }

    if(leftSide[0]<= rightSide[0]) {
      items.push(leftSide.shift());
    } else {
      items.push(rightSide.shift());
    }
  }
  return items;
};


module.exports = mergeSort;