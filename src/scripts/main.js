'use strict';

import Game from '../modules/Game.class';

const game = new Game();

const btnStartElement = document.querySelector('.start');
const btnRestartelement = document.querySelector('.restart');
console.log(btnRestartelement);

btnStartElement.addEventListener(
  'click',
  () => {
    game.start();
  },
  { once: true },
);
