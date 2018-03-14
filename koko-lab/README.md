# 42 Sorting Algorithms

This repository contains two examples of sorting algorithms, `mergeSort` and `quickSort`. Both algorithms return a sorted array.



## Data Structures

`mergeSort` - a function with an arity of one, accepts an array as an argument, modifies the original array to a left and right side until it compares only two elements, then pushes those elements in order to the original argument array. This process is repeated until all numbers in both left and ride sides of the array have been sorted, then the modified argument is returned.

Big O Notation: O(n log n)

`quickSort` - a function with an arity of one, uses three helper functions to split the array in half, determines a pivot element, and swaps elements depending on their order. The function then returns the mutated argument.

Big O Notation: worst case - O(n^2), average - O(n log n)