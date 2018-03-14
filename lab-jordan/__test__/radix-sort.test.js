'use strict';

const sort = require('../lib/radix-sort.js');

let test = [15, 43, 98, 100, 2, 73];
let expected = [2, 15, 43, 73, 98, 100];

describe('radix sort', () => {
  it('should sort the numbers correctly', () => {
    expect(sort(test)).toEqual(expected);
  })
})
