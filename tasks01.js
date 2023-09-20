'use strict';


function generateRandomArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
}

let length = 15;
let randomArray = generateRandomArray(length);
console.log(randomArray);