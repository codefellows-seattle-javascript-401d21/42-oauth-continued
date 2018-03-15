'use strict';

const sort = module.exports = {};
    
sort.radix = function(items){
    // These are my buckets. 
    // There are many buckets like them, 
    // but these buckets are mine.
    
    let zero = [];
    let one = [];
    let two = [];
    let three = [];
    let four = [];
    let five = [];
    let six = [];
    let seven = [];
    let eight = [];
    let nine = [];
    
    let buckets = [zero, one, two, three, four, five, six, seven, eight, nine]

    // What is the largest number in items?
    let max = Math.max.apply(null, items);
    
    // Function counts the total number of digits per item
    function numberOfDigits(num) {
        let count = 0;
        if(num === 0) return count = 1;
    
        while (num >= 1) {
            num = parseInt(num / 10);
            count++;
        }
        return count;
    }
    
    let highest = numberOfDigits(max);
    let numberOfTimesFillingBuckets = highest;
    let zeros = 0;
    let temp;

    // This mess below adds zeros in front of items with fewer 
    // digits to make each index equal in length
    for(let j = 0 ; j < items.length ; j++) {
        if(highest === numberOfDigits(items[j])){
            temp = items[j].toString().split('');  
        } else if(highest > numberOfDigits(items[j])) {
            zeros = highest - numberOfDigits(items[j]);
            temp = items[j].toString().split('');               

            for(let k = 0 ; k < zeros ; k++) {
                temp = ['0'].concat(temp);
            } 
        }
        items[j] = temp;
    }
    
    // This next part figures out what buckets the items
    // go into and then rearranges them after each iteration.
    // It does this the for the length of each item which
    // is how the radix sort algorithm works.
    for(let y = 0 ; y < numberOfTimesFillingBuckets ; y++){
        highest = highest - 1;
        for(let a = 0 ; a < buckets.length ; a++) {
            for(let b = 0 ; b < items.length ; b++){
                if(parseInt(items[b][highest]) == [a]) {
                    buckets[a].push(items[b]);
                }
            }
        }
        
        items = [];
        
        for(let c = 0 ; c < buckets.length ; c++){
            while(buckets[c].length > 0) {
                for(let x = 0 ; x < buckets[c].length ; x++){
                    items.push(buckets[c][x]);
                }
                buckets[c] = [];
            }
        }
    }
    
    // Convert the items back into numbers and return correct order
    let answer = [];

    for(let x = 0 ; x < items.length ; x++){
        answer.push(parseInt(items[x].join('')));
    }
    return answer;
};
