'use strict';

const quickSort = items => {
  _quickSortHelper(items, 0, items.length -1);
};

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  //base case if leftindex > rightindex
  if(rightIndex > leftIndex) {
    let pivotIndex = _partition(items, leftIndex, rightIndex);

    _quickSortHelper(items, leftIndex, pivotIndex - 1);
    _quickSortHelper(items, pivotIndex + 1, rightIndex);

  }
};

const _partition = (items, leftIndex, rightIndex) => {
  // TODO: select a pivit/ create first high/ update array
  let pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;
  
  for (let i = leftIndex; i < rightIndex; i++) {
    if(items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
  }
  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex;
};


const _swap = (items, indexA, indexB) => {

  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};

module.exports = quickSort;