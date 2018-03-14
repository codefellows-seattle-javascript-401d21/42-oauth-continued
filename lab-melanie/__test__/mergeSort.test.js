'use strict';

const mergeSort = require('../lib/mergeSort');
require('jest');

describe('Merge Sort Algorithm', function() {
  let numericArray = [8, 7, 5, 4, 3, 6, 1, 0, 9, 15];

  describe('Valid Arguments', () => {
    it('should return an array', () => {
      expect(mergeSort(numericArray)).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      let sortedArray = numericArray.sort((a, b) => a - b);
      expect(mergeSort(numericArray)).toEqual(sortedArray);
    });
    it('should not be the same order as the original array', () => {
      expect(mergeSort(numericArray)).not.toEqual([8, 7, 5, 4, 3, 6, 1, 0, 9, 15]);
    });
    it('should return the original array if it contains only one element', () => {
      expect(mergeSort([1])).toEqual([1]);
    });
  });
  describe('Invalid Arguments', () => {
    it('should return null if no argument is passed', () => {
      expect(mergeSort()).toBeNull();
    });
    it('should return null if argument is not an array', () => {
      expect(mergeSort(1)).toBeNull();
    });
    it('should return null if array is empty', () => {
      expect(mergeSort([])).toBeNull();
    });
  });
});
