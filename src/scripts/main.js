'use strict';

import Game from '../modules/Game.class';

const initialState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const game = new Game(initialState);

const btnStartElement = document.querySelector('.button.start');
const messageElementStart = document.querySelector('.message-start');

btnStartElement.addEventListener('click', () => {
  const statusButton = game.getState();

  if (statusButton === 'idle') {
    game.start();
    game.renderBoard(game.board);
    messageElementStart.classList.add('hidden');
  } else {
    game.restart();
    game.renderBoard(game.board);
  }

  btnStartElement.classList.remove('start');
  btnStartElement.classList.add('restart');
  btnStartElement.textContent = 'Restart';
});

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
  }
});
