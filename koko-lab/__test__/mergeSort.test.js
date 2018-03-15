'use strict';

const mergeSort = require('../lib/mergesort');

let Arr = [8,7,5,4,3,6,1];
let sorted = [1, 3, 4, 5, 6, 7 ,8];
let invalid = [];

describe('mergeSort Module', () => {
  describe('Valid', () => {
    it('should sort the array', () => {
      expect(mergeSort(Arr)).toEqual(sorted);
    });
    it('should be an instance of an Array', () => {
      expect(mergeSort(Arr)).toBeInstanceOf(Array);
    });
  });
  describe('Invalid', () => {
    it('should return null if no argument is passed', () => {
      expect(mergeSort()).toBeNull();
    });
    it('should return null if argument is not an array', () => {
      expect(mergeSort(8,7,5,4,3,6,1)).toBeNull();
    });
    it('should return null if array is empty', () => {
      expect(mergeSort(invalid)).toBeNull();
    });
  });
});