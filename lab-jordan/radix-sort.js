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

const redix_sort = module.exports = (arr, base=10) => {
  let maxVal = math.max(arr);

  let iteration = 0;

  while (base * iteration <= maxVal) {
    arr = buckets_to_list(list_to_buckets(arr, base, iteration));
    iteration++;
  }
  return arr;
}

const list_to_buckets = (arr, base, iteration) => {
  let buckets = [];
  for (let i = 0; i < base; i++, buckets.push([]));
  for (let number in arr) {
    let digit = (number / (base * iteration)) % base;
    buckets[digit].push(number);
  }
  return buckets;
}

const buckets_to_list = (buckets) => {
  let numbers = [];
  for (let bucket in buckets) {
    for (let number in bucket) {
      numbers.push(number);
    }
  }
  return numbers;
}
