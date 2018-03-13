'use strict';

const doThing = require('../mergeSortVer2');
require('jest');

let test = [1,8,5,3,9,7,2,4];
let test2 = [8,5];
let test3 = [5];
let answer = [ 1, 2, 3, 4, 5, 7, 8, 9 ];


describe('#solution for merge Sort', () => {
  describe('Valid inputs', () => {

    it('checks to see if its the right answer is given (2 plus)', function() {
      expect(doThing(test)).toEqual(answer);
    });
    it('checks to see if its the right answer is given (2 only)', function() {
      expect(doThing(test2)).toEqual([5,8]);
    });
    it('checks to see if its the right answer is given (1 only)', function() {
      expect(doThing(test3)).toEqual([5]);
    });
    it('checks to see if its does not return the same data passed in.', function() {
      expect(doThing(test)).not.toEqual(test);
    });
  });

  describe('invalid inputs', function() {
    it('checks to see if there is anything to pass into the function', function() {
      expect(doThing()).toBe(null);
    });
    it('checks to see if a number was passed in.', function() {
      expect(doThing(1)).toBe(null);
    });
    it('checks to see if a string was passed in', function() {
      expect(doThing('bam')).toBe(null);
    });
  });

});