'use strict';

const converted = (euro) => {
  let dollars = euro * 1.2;
  let rubles = dollars * 64;

  return rubles;
};


let euro = parseFloat(prompt('Введите стоимость покупки в евро: '));
let result = converted(euro);
console.log('Результат в рублях: ',result);


