/*
Description:
Create a function

hasTwoCubeSums(n) 
which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.

E.g. 1729 = 9³+10³ = 1³+12³.

hasTwoCubeSums(1729); // true
hasTwoCubeSums(42);   // false
*/
function hasTwoCubeSums(n) {
  let cnt = 0;
  let limit = Math.cbrt(n);
  let sum;
  for (let i = 1; i <= limit; i++) {
    for (let j = i; j <= limit; j++) {
      sum = Math.pow(i, 3) + Math.pow(j, 3);
      if (sum == n) {
        cnt++;
      }
    }
  }
  return cnt >= 2;
}
