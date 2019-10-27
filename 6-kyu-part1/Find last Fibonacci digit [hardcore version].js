/*
Description:
Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

lastFibDigit(1) == 1
lastFibDigit(2) == 1
lastFibDigit(3) == 2
lastFibDigit(1000) == 5
lastFibDigit(1000000) == 5
*/
function lastFibDigit(n) {
  n = n % 60;
  let f = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 10;
  }
  return f[n];
}
