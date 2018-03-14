'use strict';

const mergeSortMutate = require('../src/mergesort');
require('jest');

describe('Merge Sort with copy', () => {
  let testArray = [7, 2, 9, 12, 26, 1];
  let sortedArray = [1, 2, 7, 9, 12, 26];

  let randomArr = Array.apply(null, Array(1000)).map(function(item, index){
    return Math.floor(Math.random() * 9);
  });
  let sortedRandArray = randomArr.sort((a, b) => a - b);

  describe('Valid output', () => {
    it('should return an array', () => {
      expect(mergeSortMutate(testArray)).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      expect(mergeSortMutate(testArray)).toEqual(sortedArray);
    });
    it('should the same array if input is single item array ', () => {
      expect(mergeSortMutate([3])).toEqual([3]);
    });
    it('should return a sorted array with a large array input', () => {
      expect(mergeSortMutate(randomArr)).toEqual(sortedRandArray);
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
