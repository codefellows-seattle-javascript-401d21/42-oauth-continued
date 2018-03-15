'use strict';

const quick = require('../sort-algorithms/quick-sort');
require('jest');

describe('Quick Sort', () => {
    let items1 = [940, 446, 7, 12, 100, 68];
    let items2 = [90, 6, 44, 2, 1, 8];
    let items3 = [0, 46, 7, 12, 10, 68];
    let items4 = [90, 6, 7, 212, 0, 9988];

    describe('Valid Input', () => {

        it('should return a sorted array', () => {
            expect(quick(items1)).toEqual([7, 12, 68, 100, 446, 940]);
        });

        it('should return a sorted array', () => {
            expect(quick(items2)).toEqual([1, 2, 6, 8, 44, 90]);
        });

        it('should return a sorted array', () => {
            expect(quick(items3)).toEqual([0, 7, 10, 12, 46, 68]);
        });

        it('should return a sorted array', () => {
            expect(quick(items4)).toEqual([0, 6, 7, 90, 212, 9988]);
        });
    });

    describe('Invalid Input', () => {

        it('should return an empty array', () => {
            expect(quick([])).toEqual([]);
        });
    });
});