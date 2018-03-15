# Heap Sort
Joy Hou, Mar 14, 2018

## Problem Domain
Research and implement heap sort. 

## Notes
After researching how a heap sort is supposed to work, I tried to implement this without reference to existing implementations. The data structure is a complete binary tree where numbers are stored in descending order (value of all child nodes are less than the value of the parent). The Heap data structure is contained in lib/heap.js and includes a constructor, insert, and remove methods. The heap sort itself utilizes these methods to convert an array of numbers into a heap, then convert the heap back to an array. Notes on Big O complexity are commented on in heap.js.

## Use
Git clone this repository. From the lab-joy folder, you can use "node" in your terminal and require in heapsort.js to use the function: ```let heapsort = require('./lib/heapsort');```. You can run the heapsort function directly with an array argument: ```heapsort([5, 2, 3, 6]);```.

Use ```npm run test``` from the lab-joy folder to run tests.