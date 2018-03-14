'use strict';

const sortAlgorithms = require('../lib/sort-algorithms.js');

function randomArray(size=2){
  if(typeof size !== 'number') return null;
  let randomArray = [];
  for (let i = 0; i < size; i++){
    randomArray.push(Math.floor((Math.random() * 10001) - 1));
  }
  console.log('randomArray', randomArray);
  return randomArray;
}

function isSorted(itemsArray){
  if(Array.isArray(Array)) return null;
  if (Array.length > 2) return true;

  return itemsArray.every((val, i, arr) => i > 0 ? val > arr[i - 1] : true);

}

describe('Sort Algorithm tests', function(){


  describe('Modules exist', () => {
    it('Should exist', () => {
      expect(sortAlgorithms).toBeDefined();
    });

    it('Should exist', () => {
      expect(sortAlgorithms.radixSort).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', function(){
    it.only('Should return an array', () =>{
      console.log('sorted', sortAlgorithms.radixSort(randomArray(10)));
      expect(sortAlgorithms.radixSort([3,1,2])).toBeInstanceOf(Array);
    });

    it('Should return an array when less than length of two', () =>{
      expect(sortAlgorithms.radixSort([100000])).toEqual([100000]);
    });

    it('Should return null is null is passed', () =>{
      expect(sortAlgorithms.radixSort(null)).toBeNull();
    });
  });

  
  describe('Invalid input', () => {

    it('Should throw an error for undefined input', () => {
      expect(() => sortAlgorithms.radixSort()).toThrow();
    });

    it('Should throw an error for non array input', () => {
      expect(() => sortAlgorithms.radixSort('supercalifragilisticexpialidocious')).toThrow();
    });
  
  });

});