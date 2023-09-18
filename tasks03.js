'use strict';

function addPrefix(arr, prefix) {
  const prefixedNames = arr.map(name => prefix + ' ' + name);
  return prefixedNames;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefixedNames = addPrefix(names, 'Mr');
console.log(prefixedNames);