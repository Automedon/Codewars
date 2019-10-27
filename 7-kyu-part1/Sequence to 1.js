/*
Description:
Get the number n to return the sequence from n to 1. The number n can be negative and also large number. (See the range as the following)

Example : 
n=5  >> [5,4,3,2,1]
n=-1 >> [-1,0,1]

Range :
Python     -9999999 < n < 9999999
Javascript -9999 < n < 9999
c++        -9999 < n < 9999
Crystal    -9999 < n < 9999
Ruby       -9999 < n < 9999
*/

function seqToOne(n) {
  const arr = [];
  if (n > 1) {
    for (let i = n; i >= 1; i--) {
      arr.push(i);
    }
  }
  if (n < 2) {
    for (let i = n; i <= 1; i++) {
      arr.push(i);
    }
  }
  return arr;
}
