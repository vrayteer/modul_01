'use strict';

function getAverageValue(arr) {
  const sum = arr.reduce((total, currentValue) => total + currentValue, 0);
  const average = Math.floor(sum / arr.length);
  return average;
  }

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const averageCashbox = getAverageValue(allCashbox);
console.log(averageCashbox);