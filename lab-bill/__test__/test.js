'use strict';

const mergesort = require('../src/mergesort');

describe('merge sort', () => {
  let randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
  let test1 = randomArray(100, 50);
  let test2 = randomArray(1000, 60);
  it('should sort an empty array', () => {
    expect(mergesort([])).toEqual([]);
  });
  it('should sort a single element array', () => {
    expect(mergesort([1])).toEqual([1]);
  });
  it('should sort a medium array', () => {
    expect(mergesort(test1)).toEqual(test1.sort(function(a,b) {
      return a - b;}));
  });
  it('should sort a large array', () => {
    expect(mergesort(test2)).toEqual(test2.sort(function(a,b) {
      return a - b;}));
  });
});