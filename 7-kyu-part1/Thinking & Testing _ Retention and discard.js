/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
*/
function testit(n) {
  let arr = [];
  for (let i = 1; i <= n; i += 2) 
    if (n % i === 0) arr.push(i);
  return arr;
}
