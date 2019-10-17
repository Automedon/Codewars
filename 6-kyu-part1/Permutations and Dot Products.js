/*
Description:
Task
The dot product is usually encountered in linear algebra or scientific computing. It's also called scalar product or inner product sometimes:

In mathematics, the dot product, or scalar product (or sometimes inner product in the context of Euclidean space), is an algebraic operation that takes two equal-length sequences of numbers (usually coordinate vectors) and returns a single number.
Wikipedia

In our case, we define the dot product algebraically for two vectors a = [a1, a2, …, an], b = [b1, b2, …, bn] as

dot a b = a1 * b1 + a2 * b2 + … + an * bn.
Your task is to find permutations of a and b, such that dot a b is minimal, and return that value. For example, the dot product of [1,2,3] and [4,0,1] is minimal if we switch 0 and 1 in the second vector.

Examples
minDot( [1,2,3,4,5], [0,1,1,1,0] ) = 6
minDot( [1,2,3,4,5], [0,0,1,1,-4]) = -17
minDot( [1,3,5]    , [4,-2,1]    ) = -3
Remarks
If the list or array is empty, minDot should return 0. All arrays or lists will have the same length. Also, for the dynamically typed languages, all inputs will be valid lists or arrays, you don't need to check for undefined, null etc.

Note: This kata is inspired by GCJ 2008.
*/
var minDot = function(a,b){  
  if (!a.length||!b.length) return 0
  b=b.sort((a,b)=>b-a)
  a=a.sort((a,b)=>a-b)
  return a.map((v,i)=>v*b[i]).reduce((a,b)=>a+b,0)
}
