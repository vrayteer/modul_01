'use strict';


function generateRandomArray(count, nn, mm, option) {
  let array = [];

  let min = Math.min(nn, mm);
  let max = Math.max(nn, mm);

  if (option === 'even' || option === 'odd') {
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (option === 'even' && randomNum % 2 === 0) {
      array.push(randomNum);
    } else if (option === 'odd' && randomNum % 2 !== 0) {
      array.push(randomNum);
    }
  }
}   else {
  return [];
}

  return array;
}

let count = 10;
let nn = -100;
let mm = 100;
let option = 'even';
let myRandomArrayThree = generateRandomArray(count, nn, mm, option);
console.log(myRandomArrayThree);
