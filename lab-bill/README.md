This is an application that sorts an array based on a Merge Sort. Meaning it divides the array into pairs of elements. It then takes those individual pairs and sorts them, and then combines them with other pairs until eventually the entire array is rejoined. 

To access the method mergesort visit index.js. An example of mergesort and the result would look like this:
```
// want to sort [6,7,3,4,2,1,9,8]

let array = [6,7,3,4,2,1,9,8]
mergesort(array)

//
returns [1,2,3,4,6,7,8,9]
```