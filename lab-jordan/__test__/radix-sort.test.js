'use strict';

const radix = require('../lib/radix-sort.js');

let randomArray = n => {
  let result = [];
  for (let i = 0; i < n; i++) {
    let number = ~~(Math.random() * (1e4 - 1) + 1);
    result.push(number)
  }
  return result;
}

let sorted = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

describe('radix sort', () => {
  it('empty array', () => {
    expect(sorted(radix(randomArray(0)))).toEqual(true);
  })
  it('single element array', () => {
    expect(sorted(radix(randomArray(1e0)))).toEqual(true);
  })
  it('small array', () => {
    expect(sorted(radix(randomArray(1e1)))).toEqual(true);
  })
  it('medium array', () => {
    expect(sorted(radix(randomArray(1e2)))).toEqual(true);
  })
  it('large array', () => {
    expect(sorted(radix(randomArray(1e3)))).toEqual(true);
  })
  it('very large array', () => {
    expect(sorted(radix(randomArray(1e4)))).toEqual(true);
  })
})
