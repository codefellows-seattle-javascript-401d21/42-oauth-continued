'use strict';

const merge = (items, start, mid, end) => {
  let leftStart = start;
  let rightStart = mid+1;
  let temp = [];
  let tempIdx = 0;
  // left side/right side have some items
  while(leftStart <= mid && rightStart <= end){
    if(items[leftStart] <= items[rightStart]){
      temp[tempIdx] = items[leftStart];
      leftStart++;
    }else{
      temp[tempIdx] = items[rightStart];
      rightStart++;
    }
    tempIdx++;
  }

  // left side is empty
  if(leftStart === mid+1){
    while(rightStart <= end){
      temp[tempIdx] = items[rightStart];
      rightStart++;
      tempIdx++;
    }
  }
  // right side is empty
  else{
    while(leftStart <= mid){
      temp[tempIdx] = items[leftStart];
      leftStart++;
      tempIdx++;
    }
  }

  // modify original array
  tempIdx = 0;
  for(let i = start; i <= end; i++){
    items[i] = temp[tempIdx];
    tempIdx++;
  }
}

const mergeSort = (items, left , right) => {
  if(items === null){
    return null;
  }
  if(left === right){
    return items;
  }

  let mid = Math.floor((left + right) / 2);
  mergeSort(items, left, mid);
  mergeSort(items, mid+1, right);
  merge(items, left, mid, right);
}

module.exports = mergeSort;
