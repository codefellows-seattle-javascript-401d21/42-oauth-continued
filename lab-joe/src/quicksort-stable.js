'use strict'

const _swap = (items, firstIndex, secondIndex) => {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

const _partition = (items, left, right) => {

    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) { i++; }
        while (items[j] > pivot) { j--; }
        if (i <= j) {
            _swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const quickSortStable = (items, left, right) => {


if(typeof items !== 'object') return null
if (items.length < 2) return null



    let index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = _partition(items, left, right);
        if (left < index - 1) {
            quickSortStable(items, left, index - 1);
        }
        if (index < right) {
            quickSortStable(items, index, right);
        }
    }
    return items;
}

module.exports = quickSortStable;