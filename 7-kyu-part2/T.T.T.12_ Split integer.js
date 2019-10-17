/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. series #12: Split integer


Task
Given a positive integer n (n>=2), split it into the sum of at least TWO positive integers and maximize the product of those integers. Return the maximum product you can get.

For example:

if ```n = 2```, should return ```1``` (2 = 1 + 1, 1 x 1 = 1); 

If ```n = 10```, should return ```36``` (10 = 3 + 3 + 4, 3 x 3 x 4 = 36).
*/
function splitInt(n) {
  if (n == 2) return 1;
  if (n == 3) return 2;
  let dp = Array(200).fill(0);
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      let t = dp[j] * dp[i - j];
      if (t > dp[i]) dp[i] = t;
    }
  }
  return dp[n];
}
