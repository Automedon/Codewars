/*
Description:
Have a look at the following numbers.

 n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750
Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n:

int getScore(1) = return 50;
int getScore(2) = return 150;
int getScore(3) = return 300;
int getScore(4) = return 500;
int getScore(5) = return 750;
*/

function getScore(n) {
    return n * (n + 1) * 25;
  }
