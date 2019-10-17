/*
Description:
Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!

If you like this Kata, please try

Simple Prime Streaming

Life without primes

Please also try the performance version of this kata at Upside down numbers - Challenge Edition
*/
function solve(x, y) {
  const invalid = ["2","3","4","5","7"]
  let arr = []
  for(let i = x; i <y; i++) {
    let valid = true
    invalid.map(n => {
      if(i.toString().includes(n)) valid = false
    })
    if (valid) arr.push(i+'')
  }
  return arr.filter(n => n === n.replace(/6|9/g,v=>v==='6'?'9':'6').split``.reverse().join``).length
};
