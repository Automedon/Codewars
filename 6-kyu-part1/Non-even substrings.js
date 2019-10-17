/*
Description:
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!
*/
const BigNumber = require('bignumber.js');
function solve(s){
  let arr = []
  for (let i=0;i<=s.length;i++){
    for (let j=i+1;j<=s.length;j++){
      let x = new BigNumber(s.slice(i,j))
      if (x.modulo(2)*1===1) arr.push(s.slice(i,j))
    }
  }
  return arr.length
};
