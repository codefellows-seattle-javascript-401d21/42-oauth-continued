'use strict';

const quickSort = require('../lib/quickSort');
require('jest');

describe('Quick Sort Algorithm', function() {
  let Arr = [8,7,5,4,3,6,1];
  let sorted = [1, 3, 4, 5, 6, 7 ,8];
  let invalid = [];
  let one = [1];

  describe('Valid Arguments', () => {
    quickSort(Arr);
    it('should return an array', () => {
      expect(Arr).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      expect(Arr).toEqual(sorted);
    });
    it('should not be the same order as the original array', () => {
      expect(Arr).not.toEqual([8, 7, 5, 4, 3, 6, 1, 0, 9, 15]);
    });
    it('should return an empty array if argument array was empty', () => {
      quickSort(invalid);
      expect(invalid).toEqual([]);
    });
    it('should return one the one element if only one as given', () => {
      quickSort(one);
      expect(one).toEqual([1]);
    });
  });
});