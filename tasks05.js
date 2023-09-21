'use strict';

function gameBot() {
  const guessNumber = Math.floor(Math.random() * 100) + 1;
  
  while (true) {
  const userInput = prompt("Угадай число от 1 до 100:");
  
  if (userInput === null) {
  console.log("Игра окончена.");
  break;
  }
  
  const guess = parseInt(userInput);
  
  if (isNaN(guess)) {
  console.log("Введи число!");
  } else if (guess < 1 || guess > 100) {
  console.log("Число должно быть от 1 до 100!");
  } else if (guess < guessNumber) {
  console.log("Больше!");
  } else if (guess > guessNumber) {
  console.log("Меньше!");
  } else {
  console.log("Правильно!");
  break;
  }
  }
  }
  
  gameBot();