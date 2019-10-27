/*
Description:
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
You are given money in nominal value of n with 1<=n<=1500.
Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
Good Luck!!!
*/
function solve(n) {
  let count = 0;
  while (n >= 500) {
    count++;
    n -= 500;
  }
  while (n >= 200) {
    count++;
    n -= 200;
  }
  while (n >= 100) {
    count++;
    n -= 100;
  }
  while (n >= 50) {
    count++;
    n -= 50;
  }
  while (n >= 20) {
    count++;
    n -= 20;
  }
  while (n >= 10) {
    count++;
    n -= 10;
  }
  return n === 0 ? count : -1;
}
