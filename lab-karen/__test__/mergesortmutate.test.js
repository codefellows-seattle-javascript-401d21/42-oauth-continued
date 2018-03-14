'use strict';

const mergeSortMutate = require('../src/mergesort');
require('jest');

describe('Merge Sort with copy', () => {
  let testArray = [7, 2, 9, 12, 26, 1];
  let sortedArray = [1, 2, 7, 9, 12, 26];

  describe('Valid output', () => {
    it('should return an array', () => {
      expect(mergeSortMutate(testArray)).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      expect(mergeSortMutate(testArray)).toEqual(sortedArray);
    });
  });

  describe('Invalid input', () => {
    it('should return null if no input', () => {
      expect(mergeSortMutate()).toBeNull();
    });
    it('should return message if non-array input', () => {
      expect(mergeSortMutate(2)).toEqual('Input must be an array');
    });
    it('should return message if empty input', () => {
      expect(mergeSortMutate([])).toEqual('Array cannot be empty');
    });
  });

});
