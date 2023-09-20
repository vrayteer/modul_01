'use strict';

function getLeapYears(num, mum) {
  let startYear = Math.min(num, mum);
  let endYear = Math.max(num, mum);
  
  let leapYears = [];
  
  for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  leapYears.push(year);
  }
  }
  
  return leapYears;
  }
  
  let num = -100;
  let mum = 100;
  let leapYearsArray = getLeapYears(num, mum);
  console.log(leapYearsArray);