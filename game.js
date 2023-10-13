'use strict';

const game = (() => {
  let playerBalls = 5;
  let botBalls = 5;

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const playGame = () => {
    while (playerBalls > 0 && botBalls > 0) {
      const playerGuess = parseInt(
        prompt('Введите число от 1 до ' + playerBalls));
      const botGuess = getRandomNumber(1, botBalls);

      if (playerGuess % 2 === 0) {
        console.log('Игрок загадал четное число');
      } else {
        console.log('Игрок загадал нечетное число');
      }

      if (botGuess % 2 === 0) {
        console.log('Бот угадал четное число');
        botBalls += playerBalls;
        playerBalls = 0;
      } else {
        console.log('Бот не угадал четное число');
        playerBalls += botBalls;
        botBalls = 0;
      }

      console.log('У игрока осталось ' + playerBalls + ' шариков');
      console.log('У бота осталось ' + botBalls + ' шариков');
    }

    if (playerBalls === 0) {
      console.log('Игрок проиграл');
    } else {
      console.log('Бот проиграл');
    }
  };

  return {
    startGame: () => {
      console.log('Игра началась');
      console.log('У игрока ' + playerBalls + ' шариков');
      console.log('У бота ' + botBalls + ' шариков');
      playGame();
    },
  };
})();

game.startGame();
