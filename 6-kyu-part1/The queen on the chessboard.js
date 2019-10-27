/*
Description:
The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).

Task:
Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

For example when input position is A1 return value should be:

["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +

Q = queen
x = available move
Input:
input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.
*/
function availableMoves(position) {
  if (typeof position !=='string') return []  
  let createRealDesk = ['A','B','C','D','E','F','G','H']
  let realDesk = []
  for (let i = 0; i < 8; i++) {
    let temp = [];
    for (let j = 0; j < 8; j++) {
      temp.push(createRealDesk[j]+(i+1));
    }
    realDesk.push(temp);
  }
  if (![].concat(...realDesk).includes(position)) return []
  let desk = [];
  for (let i = 0; i < 8; i++) {
    let temp = [];
    for (let j = 0; j < 8; j++) {
      temp.push(0);
    }
    desk.push(temp);
  }
  let mapL = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 };
  let mapN = { 1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1, 8: 0 };
  
  let b = position.split``;
  let x = mapL[b[0]];
  let y = mapN[b[1]];
  for (let i = y, j = x; j >= 0 && i >= 0; j--, i--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i < 8; j++, i++) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i >= 0; j++, i--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j >= 0 && i < 8; j--, i++) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j >= 0 && i >= 0; j--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i < 8; j++) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i >= 0;  i--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j >= 0 && i < 8;i++) {
    desk[i][j] = 1;
  }

  desk[y][x]=0
  desk=desk.reverse()
  let answer = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (desk[j][i]) answer.push(realDesk[j][i]);
    }
  }
  return answer
}
