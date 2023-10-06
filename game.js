'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getFigure = lang => {
    const figures = lang === 'EN' || lang === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const randomIndex = getRandomIntInclusive(0, 2);
    return figures[randomIndex];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;

    const playRound = () => {
      const playerChoice = prompt('Выбери: камень, ножницы, бумага');
      if (!playerChoice) {
        const confirmExit = confirm('Точно хочешь выйти?');
        if (confirmExit) {
          alert(`Игра завершена. Результат: Игрок ${result.player},
          Компьютер ${result.computer}`);
          return;
        }
      }

      const computerChoice = getFigure(lang);
      console.log(`Игрок выбрал: ${playerChoice}`);
      console.log(`Компьютер выбрал: ${computerChoice}`);

      // Логика определения победителя и обновление счета
      if (playerChoice === computerChoice) {
        console.log('Ничья');
      } else if (
        (playerChoice === 'камень' && computerChoice === 'ножницы') ||
        (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
        (playerChoice === 'бумага' && computerChoice === 'камень')
      ) {
        console.log('Игрок победил');
        result.player++;
      } else {
        console.log('Компьютер победил');
        result.computer++;
      }

      console.log(`Счет: Игрок ${result.player}, Компьютер ${result.computer}`);

      // Рекурсивный вызов playRound() для следующего раунда
      playRound();
    };

    // Запуск первого раунда
    playRound();
  };

  window.RPS = game;
})();
