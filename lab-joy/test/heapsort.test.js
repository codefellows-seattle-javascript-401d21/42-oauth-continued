'use strict';

let heapsort = require('../lib/heapsort');
require('jest');

describe('#heapsort function', () => {
  const randomIntegers = n => Array.from({ length: n }, () => Math.floor(Math.random() * 10000));

  it('should return an error for an empty array input', () => {
    expect(heapsort([])).toBe('Input must be a non-empty array.');
  });

  it('should return the same array for a single element array input', () => {
    expect(heapsort([1])).toMatchObject([1]);
  });

  it('should correctly sort a small array', () => {
    let arr = randomIntegers(10);
    let sorted = arr.sort();
    expect(heapsort(arr)).toMatchObject(sorted);
  });

  it('should correctly sort a medium array', () => {
    let arr = randomIntegers(100);
    let sorted = arr.sort();
    expect(heapsort(arr)).toMatchObject(sorted);
  });

  it('should correctly sort a large array', () => {
    let arr = randomIntegers(5000);
    let sorted = arr.sort();
    expect(heapsort(arr)).toMatchObject(sorted);
  });
});