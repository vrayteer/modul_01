'use strict';


function generateRandomArray(arrayLength, n, m) {
  let array = [];

  let min = Math.min(n, m);
  let max = Math.max(n, m);

  for (let i = 0; i < arrayLength; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNum);
  }
  return array;
}

let arrayLength = 10;
let n = -100;
let m = 100;
let myRandomArray = generateRandomArray(arrayLength, n, m);
console.log(myRandomArray);