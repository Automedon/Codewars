/*
Description:
Marcus was spending his last summer day playing chess with his friend Rose.

Surprisingly, they had a lot of pieces (we suspect Marcus is a part-time thief, but we will leave that aside), and Marcus wondered in how many different positions could 8 towers (rooks) be in the board, without threatening themselves.

Rose (who was smarter) was wondering if there was any relation between the size of the board, and the number of positions.

So, you should help!

Write a function that, given N (positive-only integer) the size of the board , returns the number of different combinations in which these towers can be.

Example:

towerCombination(2) returns 2, because only the following possibilities can be achieved.

| x 0 |
| 0 x |

| 0 x |
| x 0 |
towerCombination(3) returns 6, because only the following possibilities can be achieved.

| x 0 0 |
| 0 x 0 |
| 0 0 x |

| x 0 0 |
| 0 0 x |
| 0 x 0 |

| 0 x 0 |
| x 0 0 |
| 0 0 x |

| 0 x 0 |
| 0 0 x |
| x 0 0 |

| 0 0 x |
| x 0 0 |
| 0 x 0 |

| 0 0 x |
| 0 x 0 |
| x 0 0 |
*/

function towerCombination(n){
  return n === 1 ? 1 : n * towerCombination(n - 1);
}
