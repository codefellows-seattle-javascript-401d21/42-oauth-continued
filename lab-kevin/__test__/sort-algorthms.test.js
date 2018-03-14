'use strict';

const sortAlgorithms = require('../lib/sort-algorithms.js');
const radixSort = require('../index');

//create array of random numbers based on size parameter
function randomArray(size=2){
  if(typeof size !== 'number') return null;
  let randomArray = [];
  for (let i = 0; i < size; i++){
    randomArray.push(Math.floor((Math.random() * 100001) - 1));
  }
  return randomArray;
}

//validate the array os sorted
function isSorted(itemsArray){
  if(Array.isArray(Array)) return null;
  if (Array.length > 2) return true;

  return itemsArray.every((val, i, arr) => i > 0 ? val >= arr[i - 1] : true);

}

describe('Sort Algorithm tests', function(){

  describe('Modules exist', () => {
    it('Should exist', () => {
      expect(sortAlgorithms).toBeDefined();
    });

    it('Should exist', () => {
      expect(radixSort).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', function(){
    it('Should return an array', () => {
      expect(radixSort([3,1,2])).toBeInstanceOf(Array);
    });

    it('Should return an array when less than length of two', () =>{
      expect(radixSort([100000])).toEqual([100000]);
    });

    it('Should return null is null is passed', () =>{
      expect(radixSort(null)).toBeNull();
    });

    it('Should return a sorted array when sorting a small array', () => {
      let sortedArray = radixSort(randomArray(10));
      expect(isSorted(sortedArray)).toBe(true);
    });

    it('Should return a sorted array when sorting a medium array', () => {
      let sortedArray = radixSort(randomArray(1000));
      expect(isSorted(sortedArray)).toBe(true);
    });

    it('Should return a sorted array when sorting a large array', () => {
      let sortedArray = radixSort(randomArray(10000));
      expect(isSorted(sortedArray)).toBe(true);
    });

  });

  
  describe('Invalid input', () => {

    it('Should throw an error for undefined input', () => {
      expect(() => radixSort()).toThrow();
    });

    it('Should throw an error for non array input', () => {
      expect(() => radixSort('supercalifragilisticexpialidocious')).toThrow();
    });
  
  });

});