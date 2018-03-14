function merge(left, right){
  var result = [],
    iteratorLeft = 0,
    iteratorRight = 0;
  while (iteratorLeft < left.length && iteratorRight < right.length) {
     
    if (left[iteratorLeft] < right[iteratorRight]) {
      result.push(left[iteratorLeft++]);
    } else {
      result.push(right[iteratorRight++]);
    }
  }
  
  return result.concat(left.slice(iteratorLeft)).concat(right.slice(iteratorRight));
}

function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }
  var middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle),
    params = merge(mergeSort(left), mergeSort(right));
  // Add the arguments to replace everything between 0 and last item in the array
  
  params.unshift(0, items.length);
  
  items.splice.apply(items, params);
  
  return items;
}

let arrayOne = [8,3,6,7,4,2,9,5,60];

console.log(mergeSort(arrayOne));