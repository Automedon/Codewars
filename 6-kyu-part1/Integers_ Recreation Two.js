/*
Description:
We are still with squared integers.

Given 4 integers a, b, c, d we form the sum of the squares of a and b and then the sum of the squares of c and d. We multiply the two sums hence a number n and we try to decompose n in a sum of two squares e and f (e and f integers >= 0) so that n = e² + f².

More: e and f must result only from sums (or differences) of products between on the one hand (a, b) and on the other (c, d) each of a, b, c, d taken only once. For example, prod2sum(1, 2, 1, 3) should return [[1, 7], [5, 5]]) because

1==1*3-1*2
7==2*3+1*1
5==1*2+1*3
Suppose we have a = 1, b = 2, c = 1, d = 3. First we calculate the sums 1² + 2² = 5 and 1² + 3² = 10 hence n = 50.

50 = 1² + 7² or 50 = 7² + 1² (we'll consider that these two solutions are the same) or 50 = 5² + 5².

The return of our function will be an array of subarrays (in C an array of Pairs) sorted on the first elements of the subarrays. In each subarray the lower element should be the first.

prod2sum(1, 2, 1, 3) should return [[1, 7], [5, 5]]

prod2sum(2, 3, 4, 5) should return [[2, 23], [7, 22]]

because (2² + 3²) * (4² + 5²) = 533 = (7² + 22²) = (23² + 2²)

prod2sum(1, 2, 2, 3) should return [[1, 8], [4, 7]]

prod2sum(1, 1, 3, 5) should return [[2, 8]] (there are not always 2 solutions).

##Hint Take a sheet of paper and with a bit of algebra try to write the product of squared numbers in another way.
*/
function prod2sum(a, b, c, d) {
  let [x, y, z, n ] = [ 
    b * c - a * d, a * c + b * d, b * d - a * c, a * d + b * c ]
  .map(z => Math.abs(z)).sort((a, b) => a - b);
  return x === y ? [[x, n]]: [[x, n], [y, z]];
}
