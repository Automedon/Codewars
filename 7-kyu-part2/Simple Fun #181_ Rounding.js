/*
Description:
Task
Round the given number n to the nearest multiple of m.

If n is exactly in the middle of 2 multiples of m, return n instead.

Example
For n = 20, m = 3, the output should be 21.

For n = 19, m = 3, the output should be 18.

For n = 50, m = 100, the output should be 50.

Input/Output
[input] integer n

1 ≤ n < 10^9.

[input] integer m

3 ≤ m < 109.

[output] an integer
*/
function rounding(n, m) {

  for (let i=n,j=n;;i++,j--)
  {
    if (j%m===0) return j
    if (i%m===0) return i 
    if (m/2===n) return n
  }
}
