'use strict';

const sort = require('../sort-algorithms/radix-sort');
require('jest');

let randomArray = n => {
    let items = [];
    let number;
    for (let i = 0; i < n; i++) {
        number = Math.floor(Math.random() * 999);
        items.push(number);
    }
    return items;
};
  
let sortedArray = items => {
    items.sort((a, b) => a - b);
    return items;
};

let answers = items => {
    let answer = [];

    for(let x = 0 ; x < items.length ; x++){
        answer.push(parseInt(items[x].join('')));
    }
    return answer;
};


describe('Radix Sort', () => {

    describe('Valid Input', () => {

        it('should return a small sorted array', () => {
            let items = randomArray(1);
            sortedArray(items);
            expect(sort.radix(items)).toEqual(answers(items));
        });

        it('should return a medium sorted array', () => {
            let items = randomArray(20);
            sortedArray(items);
            expect(sort.radix(items)).toEqual(answers(items));
        });

        it('should return a large ass sorted array', () => {
            let items = randomArray(5000);
            sortedArray(items);
            expect(sort.radix(items)).toEqual(answers(items));
        });
    });

    describe('Invalid Input', () => {

        it('should return an empty array', () => {
            expect(sort.radix([])).toEqual([]);
        });
    });
});

// describe('Radix Sort', () => {
//     let items1 = [940, 446, 7, 12, 100, 68];
//     let items2 = [90, 6, 44, 2, 1, 8];
//     let items3 = [0, 46, 7, 12, 10, 68];
//     let items4 = [90, 6, 7, 212, 0, 998118];

//     describe('Valid Input', () => {

//         it('should return a sorted array', () => {
//             expect(sort.radix(items1)).toEqual([7, 12, 68, 100, 446, 940]);
//         });

//         it('should return a sorted array', () => {
//             expect(sort.radix(items2)).toEqual([1, 2, 6, 8, 44, 90]);
//         });

//         it('should return a sorted array', () => {
//             expect(sort.radix(items3)).toEqual([0, 7, 10, 12, 46, 68]);
//         });

//         it('should return a sorted array', () => {
//             expect(sort.radix(items4)).toEqual([0, 6, 7, 90, 212, 998118]);
//         });
//     });

//     describe('Invalid Input', () => {

//         it('should return an empty array', () => {
//             expect(sort.radix([])).toEqual([]);
//         });
//     });
// });