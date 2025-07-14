'use strict';

import Game from '../modules/Game.class';

const initialState = [
  [2, 2, 2, 0],
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

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      game.moveUp();
      game.renderBoard(game.board);
      break;
    case 'ArrowDown':
      game.moveDown();
      game.renderBoard(game.board);
      break;
    case 'ArrowLeft':
      game.moveLeft();
      game.renderBoard(game.board);
      break;
    case 'ArrowRight':
      game.moveRight();
      game.renderBoard(game.board);
      break;
  }
});

// const statusButton = game.getState();
// game.start();
// game.renderBoard(game.board);
// messageElementStart.classList.add('hidden');
// btnStartElement.classList.remove('start');
// btnStartElement.classList.add('restart');
// btnStartElement.textContent = 'Restart';
// game.moveLeft();
// game.renderBoard(game.board);
