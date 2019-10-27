/*
Description:
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.

Check out my other kata!
Matrix Diagonal Sort OMG

String -> N iterations -> String

String -> X iterations -> String

ANTISTRING

Array - squareUp b!

Matrix - squareUp b!

Infinitely Nested Radical Expressions

pipi Numbers!

PUZZLES
*/
function squareUp(n) {
  const arr0 = Array(n).fill(0);
  const arr = [];
  const answ = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  for (let i = n; i >= 0; i--) {
    answ.push(arr0.slice(0, i).concat(arr.slice(i)));
  }
  return [].concat(...answ.filter(v => !v.every(v => v === 0)));
}
