'use strict';
/* My research into heaps:

COMPLETE BINARY HEAP DATA STRUCTURE
Heaps are binary trees where the numbers are sorted in ascending (or descending, just reverse all the instructions if descending) order (ascending meaning the root is the smallest). They are used in implementing a "priority queue", where data can be added in any order but when extracting the data, the smallest values are chosen first. 
* Rule: A child number is always greater than its parent number. 
* Pseudo Insert: 
    1. Number to be added is placed at the end of the line (bottom and then right-most node of the tree)
    2. If parent is greater than number, swap parent and number (child).
    3. Recursively keep doing this until the parent is not greater than the number.
* Pseudo Remove:
    1. Remove the root
    2. Move the number at the end of the line (bottom and then right-most node) to the top. It's now the root.
    3. Check the child numbers - if one is lower, the lowest one swaps with the root/parent. 
    4. Recursively check the children and if they're lower, swap the lowest one with the parent. 

HEAP SORT
In our heap sort, the heap data structure is constructed so that the values are in descending order (largest at top). 
1. Take out the numbers in the heap one by one (use the delete prototype method).
2. After using the delete method, it should rearrange the largest to the top again, so you can keep doing it to get the values from largest to smallest.

So, given an array of unsorted numbers, sort the numbers into a heap using the insert prototype method. Then, take them out using the delete prototype method. */