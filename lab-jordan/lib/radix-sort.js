'use strict';

const radix_sort = module.exports = (arr, base=10) => {
  let maxVal = Math.max(...arr);

  for (let exponent = 0; (base ** exponent) <= maxVal; exponent++) {
    arr = buckets_to_list(list_to_buckets(arr, base, exponent));
  }
  return arr;
}

const list_to_buckets = (arr, base, exponent) => {
  let buckets = new Map();

  for (let i = 0; i < base; buckets.set(i, []), i++);

  for (let i = 0; i < arr.length; i++) {
    let digit = ~~(arr[i] / (base ** exponent)) % base;
    buckets.get(digit).push(arr[i]);
  }
  return buckets;
}

const buckets_to_list = (buckets) => {
  let numbers = [];

  for (let value of buckets.values()) numbers.push(...value);

  return numbers;
}
