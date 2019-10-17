/*
Description:
Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
E.g.

x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];

x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/
function x(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Array(n).fill(0));
  }
  for (let i = 0; i < n; ) {
    for (let j = 0; j < n; ) {
      arr[i][j] = 1;
      i++;
      j++;
    }
  }
  for (let i = 0; i < n; ) {
    for (let j = n; j > 0; ) {
      arr[i][j - 1] = 1;
      i++;
      j--;
    }
  }
  return arr;
}
