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

  // mutate original array
  tempIdx = 0;
  for(let i = start; i <= end; i++){
    items[i] = temp[tempIdx];
    tempIdx++;
  }
};

// Time: O(NlogN) where N is the number of items in array
// Space: O(N) where N is the number of items in array
const _mergeSort = (items, left , right) => {
  if(left === right){
    return items;
  }

  let mid = Math.floor((left + right) / 2);
  _mergeSort(items, left, mid);
  _mergeSort(items, mid+1, right);
  merge(items, left, mid, right);
};

const mergeSort = items => {
  if(!Array.isArray(items)){
    throw new Error('Input needs to be an array');
  }
  if(items.length === 0){
    return;
  }
  _mergeSort(items, 0, items.length-1);
};

module.exports = mergeSort;
