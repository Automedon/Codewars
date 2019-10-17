/*
Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives (A) {
  if (!A || !A.length) return []

  let pos = A.filter(x=>x>0),
      neg = A.filter(x=>x<=0)

  return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}
