'use strict';

let heapsort = require('../lib/heapsort');
require('jest');

describe('#heapsort function', () => {
  const randomIntegers = n => Array.from({length: n}, () => ~~(Math.random() * 10000));

  it('should return an error for an empty array input', () => {
    expect(heapsort([])).toBe('Input must be a non-empty array.');
  });

  it('should return an error if input array elements are not numbers', () => {
    expect(heapsort(['str', 1, true])).toBe('Elements must be numbers.');
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

  it('should correctly sort non-integers and negative numbers', () => {
    let arr = [0, 1.5, 1.2, 1.79, -3, -3.2];
    let sorted = [-3.2, -3, 0, 1.2, 1.5, 1.79];
    expect(heapsort(arr)).toMatchObject(sorted);
  });
});