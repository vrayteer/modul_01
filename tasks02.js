'use strict';

function generateNumbers(arr) {
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);

  const sum = arr.reduce((acc, num) => acc + num, 0);

  if (sum < 50) {
    return generateNumbers(arr);
  } else {
    return arr;
  }
}

const resultArray = generateNumbers([]);
console.log('Результат массива:', resultArray);
