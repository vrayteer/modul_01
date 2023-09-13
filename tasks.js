'use strict';

// Вторая задача

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт');
} else {
  console.log('Дождя нет!');
}

// Третья задача

const math = +prompt("math",85);
const russian = +prompt("russian",75);
const informatics = +prompt("informatics",95);

if (math + russian + informatics >= 265) {
  console.log('Поздравляю, вы поступили на бюджет');
} else {
  console.log('лошара');
}

// Четвертая задача

const howMuch = prompt('сколько денег хотите снять?');

if (howMuch % 100 === 0) {
  console.log('Можете забрать деньги');
} else {
  console.log('такую сумму снять невозможно');
}

