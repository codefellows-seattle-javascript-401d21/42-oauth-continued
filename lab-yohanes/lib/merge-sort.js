'use strict';

//mergeSort = module.exports = {} wrap entire thing below in module

 const mergeSort = items => {
  let output = [];
  //implement validation
  if(item.length < 2) //if array is less then 2, return item
    return items;

    if(items.length === 2) { 
      return items[0] < items[1] ? items : items.reverse();
    }

  const middlePoint = Math.floor(items.length / 2);

  const leftSide = mergeSort(items.slice(0, middlePoint)); //slice(0, 3) returns all indecies from [0] to [3]
  const rightSide = mergeSort(items.slice(middlePoint)) //recursion  call

  while(leftSide.length || rightSide.length) {
    if(leftSide.length && !rightSide.length) {
      output = output.concat(leftSide) //look at docs for this
      break;
    }

    if(!leftSide.length && rightSide.length) {
      output = output.concat(rightSide)
      break;
    }
    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift()) //.unshift() calls last value in array
    else
      output.push(rightSide.shift()) //.shift() returns the first value in the array
    }
    return
};

module.exports = mergeSort;