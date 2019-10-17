/*
Description:
Write a function name nextPerfectSquare that returns the first perfect square that is greater than its integer argument. A perfect square is a integer that is equal to some integer squared. For example 16 is a perfect square because 16=4*4.

example

n   next perfect sqare

6    9
36   49 
0    1
-5   0 
caution! the largest number tested is closer to Number.MAX_SAFE_INTEGER
*/
function nextPerfectSquare(n) {
  if( n < 0 ) return 0;
  return (Math.floor(Math.sqrt(n)) + 1 ) ** 2;
}
