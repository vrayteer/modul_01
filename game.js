'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const isEven = number => number % 2 === 0;

  const game = () => {
    console.log('Игра началась!');

    while (playerBalls > 0 && botBalls > 0) {
      console.log('\nВы загадали:');
      const playerGuess = parseInt(prompt('Ваше число:'));

      if (playerGuess >= 1 && playerGuess <= playerBalls) {
        const botGuess = getRandomInt(1, 2);

        console.log(
          `Бот считает, что вы загадали ${
            botGuess === 1 ? 'четное' : 'нечетное'
          } число.`,
        );

        if (
          (botGuess === 1 && isEven(playerGuess)) ||
          (botGuess === 2 && !isEven(playerGuess))
        ) {
          console.log('Бот угадал!');
          botBalls += playerGuess;
          playerBalls -= playerGuess;
        } else {
          console.log('Бот не угадал!');
          playerBalls += playerGuess;
          botBalls -= playerGuess;
        }

        console.log(`У вас осталось ${playerBalls} шарика(ов).`);
        console.log(`У бота осталось ${botBalls} шарика(ов).`);
      } else {
        console.log('Некорректное число! Попробуйте еще раз.');
      }
    }

    if (playerBalls === 0) {
      console.log('Вы проиграли! Ваши шарики закончились.');
    } else {
      console.log('Вы выиграли! Шарики бота закончились.');
    }
  };

  game();
})();
