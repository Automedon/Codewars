/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(a,b){
  a=[...new Set(a)]
  b=[...new Set(b)]
  return a.concat(b).sort((a,b)=>a-b);
}
