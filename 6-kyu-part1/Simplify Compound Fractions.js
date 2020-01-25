/*
Description:
Write a function that will simplify a compound fraction. As input, it should accept three arguments as integers: integer, numerator, and denominator. It should return an array with three items, all integers: [integer, numerator, denominator]. If there should be no integer, or no fraction resulting from simplification, just return zeros in their place.

There is a convenience function you can use called toString(integer, numerator, denominator). It also takes three integer values, and returns a string of the compound fraction for logging, etc.

For example:

// 4 3/2 (four and three halves)
simplify(4, 3, 2); // == [5, 1, 2]
// becomes 5 1/2 (five and one half)

// 15/12 (fifteen twelfths)
simplify(0, 15, 12); // == [1, 1, 4]
// becomes 1 1/4 (one and one quarter)
Note: Beware of 0 denominators and numerators.
*/
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
function simplify(i, n, d) {
  const g = gcd(n,d)
  i+=~~(n/d)
  if (n===d||g===d||d===0){
    n=0
    d=0
  } else {
    n=n%d
   d/=g
   n/=g
  } 
  return [i,n,d]
}
