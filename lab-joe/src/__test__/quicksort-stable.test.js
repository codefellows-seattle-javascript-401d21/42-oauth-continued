'use strict';

const quickSortStable = require('../quicksort-stable');

describe('quick sort', function() {
  describe('#stable', function() {
    it('sort an array', function() {
      expect(quickSortStable([4,2,6,1,7,1,0])).toEqual([0,1,1,2,4,6,7]);

    });


    it('reject non array', function() {
      expect(quickSortStable('notanarray')).toBe(null);
    });

    it('short array', function() {
      expect(quickSortStable([0])).toEqual(null);
    });



  });
});
