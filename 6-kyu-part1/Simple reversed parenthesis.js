/*
Description:
Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:

solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
Parenthesis will be either "(" or ")".

More examples in the test cases.

Good luck.
*/
function solve(s){
    if (s.length%2!==0) return -1
    while (s.includes('()')){
      s=s.replace(/\(\)/g,'')
    }
    let count = 0
    for (let i=0;i<s.length;i+=2){
      if (s[i]==='('&&s[i+1]==='(') count++
      if (s[i]===')'&&s[i+1]===')') count++
      if (s[i]===')'&&s[i+1]==='(') count+=2
    }
    return count
}
