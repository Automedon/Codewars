/*
Description:
The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickles ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0]
*/
var coinCombo = function(cents) {
  let sum = [0, 0, 0, 0];
  while (cents >= 25) {
    sum[3]++;
    cents -= 25;
  }
  while (cents >= 10) {
    sum[2]++;
    cents -= 10;
  }
  while (cents >= 5) {
    sum[1]++;
    cents -= 5;
  }
  while (cents >= 1) {
    sum[0]++;
    cents -= 1;
  }
  return sum;
};
