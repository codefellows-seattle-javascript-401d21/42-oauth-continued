'use strict';

const quickSort = items => {
_quickSortHelper(items, 0, items.length - 1)

}

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if(leftIndex < rightIndex) { //base case
    let pivotIndex = _partition(items, leftIndex, rightIndex)

    _quickSortHelper(items, leftIndex, pivotIndex - 1)
    _quickSortHelper(items, pivotIndex + 1, rightIndex)
  }
}

const _partition = (items, leftIndex, rightIndex) => {
  //TODO Select a pivot / create first height / update array
  let pivotIndex = rightIndex
  let firstHighIndex = leftIndex

  for(let i = leftIndex; i < rightIndex; i++) {
    //comparing new index to the current(pivot index)
    if(items[i] < items[pivotIndex]){
      //swap the indexes
      _swap(items, i, firstHighIndex)
      firstHighIndex++ //[1 2 3, 6, 5, 7] will swap 5 and 6 to sort the array
     }
  }
  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex
}

const _swap = (items, indexA, indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB]
  items[indexB] = helper
}

module.exports = quickSort