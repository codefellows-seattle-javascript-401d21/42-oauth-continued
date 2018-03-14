'use strict';

const quicksort = items => {

  if (!items) return null;
  if (!Array.isArray(items)) return 'Input must be an array';
  if (items.length === 0) return 'Array cannot be empty';

  _quicksortHelper(items, 0, items.length-1);
};

const _quicksortHelper = (items, leftIndex, rightIndex) => {

  if(rightIndex > leftIndex) {
    let pivotIndex = _partition(items, leftIndex, rightIndex);

    _quicksortHelper(items, leftIndex, pivotIndex-1);
    _quicksortHelper(items, pivotIndex+1, rightIndex);
  }
};

const _partition = (items, leftIndex, rightIndex) => {
  let pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for(let i = leftIndex; i < rightIndex; i++) {

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

module.exports = quicksort;
