
# 42: Sorting Algorithms

---
### problem domain

`The Merge Sort implementation covered in class didn't mutate the input array (it creates an output array). Implement a version of Merge Sort that mutates the input array.`

below is our 2 test arrays
```javascript
let test = [1,8,5,3,9,7,2];
let test2 = [8,5];
```

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp i`. 

---
### using the CLI 

To use the code, run `node` in your terminal and the `index.js` file, it should look like this
```javascript
node index.js 
```
this will send off our 2 test arrays into the 2 Merge Sort function(one for each). this is the code that starts up.

once this code is complete, you should have the results that should look like this.

```javascript
orignal with 8 [ 1, 2, 3, 5, 7, 8, 9 ]
orignal with 2 [ 5, 8 ]
```

---
### what is happening.
when you run this in the termial
```javascript
node index.js 
```

you are running this function 

```javascript
const mergeSort = items => {

  if (!items || !Array.isArray(items)) return null;
  if(items.length < 2) return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : [items[1], items[0]];

  const middlePoint = Math.floor(items.length / 2);

  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));

  items = [];

  while(leftSide.length || rightSide.length) {
    if(leftSide.length && !rightSide.length) {
      items = items.concat(leftSide);
      break;
    }
    if(!leftSide.length && rightSide.length) {
      items = items.concat(rightSide);
      break;
    }

    if(leftSide[0]<= rightSide[0]) {
      items.push(leftSide.shift());
    } else {
      items.push(rightSide.shift());
    }
  }
  return items;
};
```

### big O is.......
big O time is O(n log(n))

### Testing

To run the tests for this function, type `nmp run test` in your terminal,
we do have some test SLL objects hardcoded inside of the `mergeSortVer2.test.js` file that we use for testing.

##tests

#### Valid imputs and passing
Here we are checking the correct answers from the function and we are making sure it works as indended.
```javascript
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
```

#### Invalid imputs
Here we are checking to make sure that if you input something that is wrong into the fucntion that it will kick out the function and return `null` to the user

```javascript
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
```
