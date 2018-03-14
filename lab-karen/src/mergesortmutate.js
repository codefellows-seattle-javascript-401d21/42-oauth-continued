'use strict';

const mergeSortMutate = items => {

  if (!items) return null;
  if (!Array.isArray(items)) return 'Input must be an array';
  if (items.length === 0) return 'Array cannot be empty';

  if (items.length < 2) return items;

  if (items.length === 2) {
    return items[0] < items [1] ? items : items.reverse();
  }

  const middlePoint = Math.floor(items.length / 2);

  const leftSide = mergeSortMutate(items.slice(0, middlePoint));
  const rightSide = mergeSortMutate(items.slice(middlePoint));

  //empty out the input array
  while(items.length > 0) {
    items.pop();
  }

  while(leftSide.length || rightSide.length) {

    if (leftSide.length && !rightSide.length) {
      items.push(...leftSide);
      console.log('left', items);
      break;
    }

    if (!leftSide.length && rightSide.length) {
      items.push(...rightSide);
      console.log('right', items);
      break;
    }

    if(leftSide[0] <= rightSide[0]) {
      items.push(leftSide.shift());
      console.log('leftshift', items);
    } else {
      items.push(rightSide.shift());
    }
  }
  console.log('within function', items);

  return items;
};

module.exports = mergeSortMutate;
