'use strict';

const mergesort = require('../mergesort');
require('jest');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomNum = getRandomInt(100);

let N = Array.from({length: randomNum}, getRandomInt(randomNum));

describe(`#Array of ${randomNum} random integers from 0 to ${randomNum}`, function() {
  it(`Should return an array of ${randomNum} numbers`, function() {
    expect(N.length).toEqual(randomNum);
  });
});

