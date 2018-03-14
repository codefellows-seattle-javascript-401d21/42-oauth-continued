'use strict';

const quickSort = require('../lib/quickSort');
require('jest');

describe('Quick Sort Algorithm', function() {
  let numericArray = [8, 7, 5, 4, 3, 6, 1, 0, 9, 15];
  let sortedArray = numericArray.sort((a, b) => a - b);

  describe('Valid Arguments', () => {
    quickSort(numericArray);
    it('should return an array', () => {
      expect(numericArray).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      expect(numericArray).toEqual(sortedArray);
    });
    it('should not be the same order as the original array', () => {
      expect(numericArray).not.toEqual([8, 7, 5, 4, 3, 6, 1, 0, 9, 15]);
    });
    it('should return an empty array if argument array was empty', () => {
      let empty = [];
      quickSort(empty);
      expect(empty).toEqual([]);
    });
    it('should return the same element if only one item in array', () => {
      let one = [1];
      let two = [2];
      quickSort(one);
      quickSort(two);
      expect(one).toEqual([1]);
      expect(two).toEqual([2]);
    });
  });
});
