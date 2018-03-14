# 42 Sorting Algorithms

This repository contains two examples of sorting algorithms, `mergeSort` and `quickSort`. Both algorithms return a sorted array.



## Data Structures

`mergeSort` - a divide and conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. this functions has an arity of one.

Big O Notation: O(n log n)

`quickSort` -  uses three helper functions to split the array in half, determines a pivot element, and swaps elements depending on their order. has an arity of one.

Big O Notation: worst case - O(n^2), average - O(n log n)