/*
Description:
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
ALGORITHMSGAMESVALIDATIONARRAYSGAME BOARDS
*/
const validateBattlefield = field => {
  const counts = [4, 3, 2, 1];
  for (let y = 0; y < field.length; y++) {
    const row = field[y];
    for (let x = 0; x < row.length; x++) {
      if (!row[x]) {
        continue;
      }
      if (x > 0 && y > 0 && field[y - 1][x - 1] === 1) {
        return false;
      }
      if (x > 0 && y < field.length - 1 && field[y + 1][x - 1] === 1) {
        return false;
      }
      const vertical = getVerticalSize(field, x, y);
      const horizontal = getHorizontalSize(field, x, y);
      if (horizontal > 1 && vertical > 1) {
        return false;
      }
      if (vertical > 1 && horizontal === 1) {
        counts[vertical - 1]--;
      } else if (horizontal > 1 && vertical === 1) {
        counts[horizontal - 1]--;
      } else if (vertical === 1 || horizontal === 1) {
        counts[0]--;
      }
    }
  }
  return counts.every(val => val === 0);
};

const getVerticalSize = (field, x, y) => {
  for (let i = 0; i < 5 && y + i < field.length; i++) {
    if (field[y + i][x] === 0) {
      return i;
    }
    if (i !== 0) {
      field[y + i][x] = 0;
    }
  }
  if (y + i === field.length) {
    return i;
  }
  return 1;
};

const getHorizontalSize = (field, x, y) => {
  const row = field[y];
  for (  let i = 0; i < 5 && x + i < row.length; i++) {
    if (row[x + i] === 0) {
      return i;
    }
    row[x + i] = 0;
  }
  if (x + i === row.length) {
    return i;
  }
  return 1;
};
