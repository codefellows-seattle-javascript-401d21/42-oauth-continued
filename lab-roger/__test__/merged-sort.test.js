'use strict';
const sort = require('../merged-sort');
let testArray = [8,3,6,7,4,2,9,5,60];
const array = require('../array-generator');
let arraySmall = array(10);
let arrayMedium = array(50);
let arrayLarge = array(500);
let arrayXL = array(1000);



require('jest');

describe('The test solution of sortArray', () => {

  it('should return an array', () => {
    expect(sort.mergeSort(testArray)).toBeInstanceOf(Array);
  });
  it('should return null if the input is not an array', () => {
    expect(sort.mergeSort(testArray)).toEqual([2,3,4,5,6,7,8,9,60]);
  });
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort(arraySmall)).toEqual(arraySmall.sort());
  });
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort(arrayMedium)).toEqual(arrayMedium.sort());
  });
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort(arrayLarge)).toEqual(arrayLarge.sort());
  });
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort([1])).toEqual([1].sort());
  });  
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort([])).toEqual([].sort());
  });  
  it('should return an array with the correct values', () => {
    expect(sort.mergeSort(arrayXL)).toEqual(arrayXL.sort());
  });  
});

