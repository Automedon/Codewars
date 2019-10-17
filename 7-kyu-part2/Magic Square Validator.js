/*
In recreational mathematics, a magic square is an arrangement of distinct numbers (i.e., each number is used once), usually integers, in a square grid, where the numbers in each row, and in each column, and the numbers in the main and secondary diagonals, all add up to the same number, called the "magic constant."

For example, the following "square":

  4    9    2 -> 15
  3    5    7 -> 15
  8    1    6 -> 15
 /v    v    v \
15 15   15   15  15
A 3x3 magic square will have its sums always resulting to 15, this number is called the "magic constant" and changes according to the square size.

In this problem you will have to create a function that receives a 3x3 'square' and returns True if it is magic and False otherwise. The sum of rows, columns or diagonals should always equal 15.

For example, the above square will be passed like: [4, 9, 2, 3, 5, 7, 8, 1, 6] and the output should be True

[9, 4, 7, 3, 5, 2, 8, 6, 1] should return False
*/
function isMagical(s) {
  if (s.length !== [...new Set(s)].length) return false;
  if (s[0] + s[1] + s[2] !== 15) return false;
  if (s[3] + s[4] + s[5] !== 15) return false;
  if (s[6] + s[7] + s[8] !== 15) return false;
  if (s[0] + s[3] + s[6] !== 15) return false;
  if (s[1] + s[4] + s[7] !== 15) return false;
  if (s[2] + s[5] + s[8] !== 15) return false;
  if (s[0] + s[4] + s[8] !== 15) return false;
  if (s[2] + s[4] + s[6] !== 15) return false;
  return true;
}
