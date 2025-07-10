'use strict';

const element = document.querySelector('.start');
const fiendElement = document.querySelectorAll('.field-cell');

const emptyCells = [];

fiendElement.forEach((cell) => {
  if (cell.textContent.trim() === '') {
    emptyCells.push(cell);
  }
});

// const value = Math.random() < 0.9 ? 2 : 4;
// const randomIndex = Math.floor(Math.random() * emptyCells.length);
// const randomCell = emptyCells[randomIndex];
// randomCell.textContent = value;

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(initialState) {
    // eslint-disable-next-line no-console
    console.log(initialState);
  }

  moveLeft() {}
  moveRight() {}
  moveUp() {}
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {}

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {}

  /**
   * Starts the game.
   */
  start() {
    for (let i = 0; i < 2; i++) {
      const value = Math.random() < 0.9 ? 2 : 4;
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      randomCell.textContent = value;
      randomCell.classList.add(`field-cell--${value}`);
    }

    element.className = 'button restart';
    element.textContent = 'Restart';
  }

  /**
   * Resets the game.
   */
  restart() {
    for (let i = 0; i < 2; i++) {
      const value = Math.random() < 0.9 ? 2 : 4;
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      randomCell.textContent = value;
      randomCell.classList.add(`field-cell--64`);
    }
  }

  // Add your own methods here
}

module.exports = Game;
