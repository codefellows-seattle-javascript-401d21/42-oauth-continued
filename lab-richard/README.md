<h1>Lab 42-Sorting Algorithms</h1>

author: Richard Montgomery

github: montgomeryrd

version: 1.0.0

<hr>

<h2>Sorting Algorithms</h2>

QuickSort (Best for O(n Log n), Average for O(n Log n), and worst for O(n^2)) - Quick sort picks a pivoting item in the array and checks values. One side of the pivot is for items with a smaller value than the pivot point. The right side contains the values higher than the pivot point. It breaks down into sublists with new pivot items until the entire list is in order.

MergeSort (n log n, I think) - Merge sort breaks down an array into smaller pieces so that the values can be compared and arranged in manageable portions of data to be put in order.

RadixSort (Works best/worst for O(n)) - its a non comparative integer sorting algorithm. it compares the integer based on the position of the number (significance).

<hr>

<h2>Lab Assignment</h2>

![cf](https://i.imgur.com/7v5ASc8.png) 42: Sorting Algorithms
======

# Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

# Requirements  
## Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **src/** -- containing the frontend code

# Feature Tasks 
Pick one of the following feature tasks:

## 1 - Implement a stable version of Quick Sort
__This is a fairly common interview question__

The Quick Sort implementation covered in class was not stable. Research and implement a stable version of the algorithm. 

## 2 - Mutate Merge Sort's input array

The Merge Sort implementation covered in class didn't mutate the input array (it creates an output array). Implement a version of Merge Sort that mutates the input array.

## 3 - Implement Radix Sort
__This is a fairly common interview question__

Research and implement [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort).

_This is an interesting problem since Radix Sort uses a different logic than the 'Divide and Conquer' approach covered in class_

## 4 - Implement Heap Sort

Research and implement [Heap Sort](https://en.wikipedia.org/wiki/Heapsort).

*The implementation can be either stable or unstable*

## 5 - Implement a Quick Sort/Insertion Sort Hybrid

Modify the Quick Sort implementation to use Insertion Sort if the length of the sorting set is less than 10 elements. 

## 6 - Implement Quick Sort with 3-way partition 

The Quick Sort implementation covered in class divided an array into two areas
*  Elements smaller than the pivot
*  Elements greater than or equal to the pivot

Research and implement a version of Quick Sort that divides the array into three areas:
* Elements smaller than the pivot
* Elements equal to the pivot
* Elements greater than the pivot

## Testing
- Write a test function that generates an array of N random integers
- Write a test function that asserts an array is sorted (based on your sorting implementation)
- Test each sort against an empty array, single-element array, small array, medium array and a large array (1,000 - 10,000 items).

## Stretch Goals
Implement the remaining feature tasks

##  Documentation  
Write a description of the project in your README.md
