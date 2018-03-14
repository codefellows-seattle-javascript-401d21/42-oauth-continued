'use strict';

const mergeSort = items => {
  if(!items || !Array.isArray(items) || !items.length) return null;
  if(items.length < 2) return items;
  if(items.length === 2) return items[0] < items[1] ? items : items.reverse();
  const middlePoint = Math.floor(items.length / 2);
  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));
  while(items.length > 0) {
    items.pop();
  }
  while(leftSide.length || rightSide.length) {
    if(leftSide.length && !rightSide.length) {
      items.push(...leftSide);
      break;
    }
    if(!leftSide.length && rightSide.length) {
      items.push(...rightSide);
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