'use strict';

let mergeSort = require('../lib/mergesort');
require('jest');

let testArr = [3, 33, 40, 17, 200, 1, 177, 28];
let sorted = [1, 3, 17, 28, 33, 40, 177, 200];

describe('mergeSort Unpure', () => {
  describe('Valid Inputs', () => {
    it('Should return an array with a single index', () => {
      expect(mergeSort([1])).toEqual([1]);
    });
    it('Should sort the input array', () => {
      mergeSort(testArr);
      expect(testArr).toEqual(sorted);
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return the input if invalid type', () => {
      expect(mergeSort('hello')).toBe('hello');
    });
    it('Should return undefined for no value input', () => {
      expect(mergeSort()).toBeUndefined();
    });
  });
});