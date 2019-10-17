/*
Description:
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 2) {
      count++;
    }
    if (a[i] === 7) {
      count++;
    }
    if (a[i] === 9) {
      count++;
    }
    if (a[i] === 14) {
      count++;
    }
    if (a[i] === 15) {
      count++;
    }
  }
  return count >= 5 ? "WIN" : "LOSE";
}
