'use strict';

{
  const product = prompt("product");

  const amount = +prompt("amount",5);
  console.log(typeof amount);

  if (amount === 5) {
  } else if (amount !== 'string') {
    console.log('Вы ввели некорректные данные');
  }

  // так не получается

/* if (typeof amount !== 'number') {
    console.log('Вы ввели некорректные данные');
  } else {
    // если ввел число продолжаем выполнение кода
  } */

  const furniture = prompt("furniture");

  const price = +prompt("price",7000);
  console.log(typeof price);
}