/*
Description:
The Floyd's triangle is a right-angled triangular array of natural numbers listing them in order, in lines of increasing length, so a Floyds triangle of size 6 looks like:

1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
16 17 18 19 20 21
    ...
In this kata you're given a number, and expected to return the line number it falls in, in the Floyd's triangle

nth_floyd(3) # => 2 (i.e the number `3` falls in line 2 of the triangle)
nth_floyd(17) # => 6

nth_floyd(22) # => 7
nth_floyd(499502) # => 1000
nth_floyd(n)
Constraints
1 <= n <= 109
*/
function nthFloyd(n){
  return Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2)
}
