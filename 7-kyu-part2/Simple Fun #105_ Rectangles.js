/*
Description:
Task
Imagine n horizontal lines and m vertical lines.

Some of these lines intersect, creating rectangles.

How many rectangles are there?

Examples
For n=2, m=2, the result should be 1.

there is only one 1x1 rectangle.

For n=2, m=3, the result should be 3.

there are two 1x1 rectangles and one 1x2 rectangle. So 2 + 1 = 3.

For n=3, m=3, the result should be 9.

there are four 1x1 rectangles, two 1x2 rectangles, two 2x1 rectangles and one 2x2 rectangle. So 4 + 2 + 2 + 1 = 9.

Input & Output
[input] integer n

Number of horizontal lines.

Constraints: 0 <= n <= 100

[input] integer m

Number of vertical lines.

Constraints: 0 <= m <= 100

[output] an integer

Number of rectangles.
*/
function rectangles(n, m) {
  return ((n - 1) * (m - 1) * n * m) / 4;
}
