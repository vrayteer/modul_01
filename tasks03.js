'use strict';

const reverseString = (string) => {
  const reverseString = string.split('').reverse().join('');
  return reverseString;
};

console.log(reverseString('почему это так сложно'));