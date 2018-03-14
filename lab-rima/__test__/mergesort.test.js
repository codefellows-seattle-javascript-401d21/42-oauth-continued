'use strict';

const mergeSort = require('../lib/mergesort');

describe('mergesort module', () => {

  describe('valid input', () => {
    test('should sort an original array correctly with a valid unsorted array', () => {
      let a = [6,2,4,2,8,1,-4];
      let expected = [-4,1,2,2,4,6,8];
      mergeSort(a, 0, 6);
      expect(a).toEqual(expected);
    })
    test('should sort an original array correctly with negative items', () => {
      let a = [89,0,6,2,100,4,-2,-8,-1,-4];
      let expected = [-8,-4,-2,-1,0,2,4,6,89,100];
      mergeSort(a, 0, 9);
      expect(a).toEqual(expected);
    })
    test('should sort an original array correctly with float', () => {
      let a = [6,2,4,2,8,1,-4.8,1.09];
      let expected = [-4.8,1,1.09,2,2,4,6,8];
      mergeSort(a, 0, 7);
      expect(a).toEqual(expected);
    })
    test('should return an original empty array if a passing array is empty', () => {
      expect(mergeSort([], 0, 0)).toEqual([]);
    })
  })

  describe('invalid input', () => {
    test('should throw an error if a passing array is null', () => {
      expect(() => mergeSort(null, 0, 5)).toThrow('Input needs to be an array');
    })
    test('should throw an error if non-array is passed', () => {
      expect(() => mergeSort('', 0, 5)).toThrow('Input needs to be an array');
    })
    test('should throw an error if left or right index is not type of number', () => {
      expect(() => mergeSort([], 5, '')).toThrow('Index for left or right needs to be a number');
    })
    test('should throw an error if left or right index is negative', () => {
      expect(() => mergeSort([], -1, 5)).toThrow('Index for left or right needs to be 0 or positive');
    })
  })
})
