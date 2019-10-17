/*
Description:
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};
