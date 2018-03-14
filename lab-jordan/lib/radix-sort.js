// def radix_sort(array, base=10):
//     def list_to_buckets(array, base, iteration):
//         buckets = [[] for _ in range(base)]
//         for number in array:
//             # Isolate the base-digit from the number
//             digit = (number // (base ** iteration)) % base
//             # Drop the number into the correct bucket
//             buckets[digit].append(number)
//         return buckets
//
//     def buckets_to_list(buckets):
//         numbers = []
//         for bucket in buckets:
//             # append the numbers in a bucket
//             # sequentially to the returned array
//             for number in bucket:
//                 numbers.append(number)
//         return numbers
//
//     maxval = max(array)
//
//     it = 0
//     # Iterate, sorting the array by each base-digit
//     while base ** it <= maxval:
//         array = buckets_to_list(list_to_buckets(array, base, it))
//         it += 1
//
//     return array

const radix_sort = module.exports = (arr, base=10) => {
  let maxVal = Math.max(...arr);

  let iteration = 0;

  while (base ** iteration <= maxVal) {
    arr = buckets_to_list(list_to_buckets(arr, base, iteration));
    iteration++;
  }
  return arr;
}

const list_to_buckets = (arr, base, iteration) => {
  console.log('in list_to_buckets');
  let buckets = [];
  for (let i = 0; i < base; i++, buckets.push([]));
  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i] / (base ** iteration)) % base;
    buckets[digit].push(arr[i]);
    console.log('buckets:', buckets);
  }
  return buckets;
}

const buckets_to_list = (buckets) => {
  console.log('in buckets_to_list');
  let numbers = [];
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      numbers.push(buckets[i][j]);
    }
  }
  return numbers;
}
