'use strict';

const mergeSort = items => {
  let output = [];
  if(items.length < 2)
    return items;

  if(items.length === 2){
    return items[0] < items[1] ? items : items.reverse();
  }

  const middlePoint = Math.floor(items.length / 2);


  const leftSide = mergeSort(items.slice(0,middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));


  while(leftSide.length || rightSide.length){

    if(leftSide.length && !rightSide.length){
      output = output.concat(leftSide); 
      break;
    }

    if(!leftSide.length && rightSide.length){
      output = output.concat(rightSide); 
      break;
    }

    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift()); 
    else
      output.push(rightSide.shift()); 
  }
  return output;
};

module.exports = mergeSort;