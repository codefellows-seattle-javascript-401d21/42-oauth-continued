'use strict';

module.exports = function(n) {
 
  let array = [];
  for (let i = 0; i < n; i++) {
    let number = Math.floor((Math.random() * n) + 1);
    array.push(number);
  }
  return array;
};