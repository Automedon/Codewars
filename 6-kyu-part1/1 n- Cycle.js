/*
Description:
Let be n an integer prime with 10 e.g. 7.

1/7 = 0.142857 142857 142857 ....

We see that the decimal part has a cycle: 142857. The length of this cycle is 6. In the same way:

1/11 = 0.09 09 09 .... Cycle length is 2.

Task
Given an integer n (n > 1), the function cycle(n) returns the length of the cycle if n and 10 are coprimes, otherwise returns -1.

Exemples:
cycle(5) = -1
cycle(13) = 6 -> 0.076923 076923 0769
cycle(21) = 6 -> 0.047619 047619 0476
cycle(27) = 3 -> 0.037 037 037 037 0370
cycle(33) = 2 -> 0.03 03 03 03 03 03 03 03
cycle(37) = 3 -> 0.027 027 027 027 027 0
cycle(94) = -1 

cycle(22) = -1 since 1/22 ~ 0.0 45 45 45 45 ...
*/
function cycle(n) {
  if (n % 2 == 0 || n % 5 == 0) {
    return -1;
  } else {
    let res = 10 % n,
      c = 1;
    while (res != 1) {
      res = (res * 10) % n;
      c++;
    }
    return c;
  }
}
