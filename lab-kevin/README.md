># lab 42- Sorting Algorithms

  Implement Radix Sort



>## Install

```BASH
    npm i
```

### Dependencies 

- This project has the following dependencies:

```JSON
   "devDependencies": {
    "eslint": "^4.18.1",
    "jest": "^22.4.2"
  }
```

### npm scripts

- The following npm scripts are available:

```JSON
  "scripts": {
    "lint": "eslint .",
    "test": "jest --verbose -i"
  }
```

#### Run the tests!

Normal mode

```BASH
    npm test
```


>## Usage

The sort-algorithms module currently has one sort, a radix sort.  It takes one argument, an array.  A error is thrown for non arrays or undefined values.  Null will be returned for a null value passed as an argument.  

This radix sort returns an array of sorted values for an array of whole numbers.  It will not work with floating point values.  The sort works by pushing the values to a hash table, then parsing the hash table back into a one dimensional array. This process repeats until all the values end up in the same index of the hash table.

```JAVASCRIPT

//original array
arr = [34, 57, 24, 67, 231, 1, 84, 2, 6, 92, 393 ]

//ones place sort
hash =
[1] = [231, 1]
[2] = [2, 92]
[3] = [393]
[4] = [34, 24, 84]
[6] = [6]
[7] = [57, 67]

//new array
arr = [231, 1, 2, 92, 393, 34, 24, 84, 6, 57, 67]

//tens place sort
hash =
[0] = [1, 2, 6]
[2] = [24]
[3] = [231, 34]
[5] = [57]
[6] = [67]
[8] = [84]
[9] = [92, 393]

//new array
arr = [1, 2, 6, 24, 231, 34, 57, 67, 84, 92, 393]

//hundreds place sort
hash =
[0] = [1, 2, 6, 24, 34, 57, 67, 84, 92]
[2] = [231]
[3] = [393]

//new array
arr = [1, 2, 6, 24, 34, 57, 67, 84, 92, 231, 393]

//thousands place sort
hash =
[0] = [1, 2, 6, 24, 34, 57, 67, 84, 92, 231, 393]

return hash[0]
```

