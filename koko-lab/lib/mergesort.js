'use strict';

const mergeSort = items => {

  if(!items) return null;
  if(!Array.isArray(items))return null;
  if(!items.length) return null;

  let output =[];
  if(items.length <2) return items;
  if(items.length === 2) 
    return items[0] < items[1] ? items : items.reverse();
  const middlePoint = Math.floor(items.length / 2);
  const leftSide =  items.slice(0, middlePoint);
  const rightSide = items.slice(middlePoint);

  while (leftSide.leftSide || rightSide.length) {
    if (leftSide.length && !rightSide.length){
      output = output.concat(leftSide);
      break;
    }
    if (rightSide.length && !leftSide.length) {
      output = output.concat(rightSide);
      break;
    }
    if (leftSide[0] <= rightSide[0]){
      output.push(leftSide.shift());
    } else
      output.push(rightSide.shift());
  }
  return output;
};
